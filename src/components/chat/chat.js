import Message from '../message/Message.vue';
import Mqtt from 'paho-mqtt';
import { v4 as uuidv4 } from 'uuid';

let client = null;
export default {
    props: {
        user: String, 
        group: Object,
    },
    components: {
        Message
    },
    data() {
        return {
            messages: [],
            message: ''
        }
    },

    mounted() {
        client = new Mqtt.Client(location.hostname, 61616, uuidv4());
        this.connect(this.user, this.group);
        // window.addEventListener('beforeunload', () => client.send(this.group, { message: `${this.user} has left`, user: 'admin', id: null }));
    },

    watch: {
        group: function(val) {
            const payload = JSON.stringify({message: `${this.user} have joined ${this.group.name}`, user: 'admin'})
            let message = new Mqtt.Message(payload);
            message.destinationName = "my/topic/" + this.group.id;
            client.send(message);
        }
    },
    
    beforeUnmount() {
        // client.disconnect(() => {
        //     client.send(this.group, { message: `${this.user} has left`, user: 'admin', id: null })
        // });
    },
    methods: {
        connect(user, group) {
            console.log(`connecting user ${user} to group ${group.id}`);
            let onConnect = () => {
                // Once a connection has been made, make a subscription and send a message.
                console.log("onConnect");
                const topic = "my/topic/#";
                client.subscribe(topic);
                const payload = JSON.stringify({message: `${user} have joined ${group.name}`, user: 'admin'})
                let message = new Mqtt.Message(payload);
                message.destinationName = "my/topic/" + group.id;
                client.send(message);
            }

            // called when the client loses its connection
            client.onConnectionLost = (responseObject) => {
                console.log("onConnectionLost:", responseObject);
            }
            
            // called when a message arrives
            client.onMessageArrived = (message) => {
                console.log("onMessageArrived:", message.topic, message.payloadString);
                this.messageHandler(message.payloadString);
            }

            // connect the client
            client.connect({
                onSuccess: onConnect, 
                mqttVersion: 4
            });
        },
        messageHandler(msg) {
            // payload['id'] = msg.headers["message-id"];
            try {
                this.messages.push(JSON.parse(msg));
            } catch (e) {
                console.warn(`Can not process message '${msg}'. Ignored!`, e);
            }
        },

        sendMessage() {
            if (this.message) {
                let msg = new Mqtt.Message(JSON.stringify({message: this.message, user: this.user}));
                msg.destinationName = 'my/topic/' + this.group.id;
                client.send(msg);
                this.message = '';
            } else {
                console.log('Emty message is ignored!')
            }
        },
    }

}