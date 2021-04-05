import Message from '../message/Message.vue';
import Mqtt from 'paho-mqtt';

let client = null;
export default {
    props: ['user', 'group'],
    components: {
        Message,
    },
    data() {
        return {
            messages: [],
            message: ''
        }
    },

    mounted() {
        // console.log('props', this.group);
        client = new Mqtt.Client(location.hostname, 61616, "clientId");
        this.connect(this.user, this.group);
        window.addEventListener('beforeunload', () => client.send(this.group, { message: `${this.user} has left`, user: 'admin', id: null }));
    },
    
    beforeUnmount() {
        // client.disconnect(() => {
        //     client.send(this.group, { message: `${this.user} has left`, user: 'admin', id: null })
        // });
    },
    methods: {
        connect(user, group) {
            console.log(`connecting user ${user} to group ${group}`);


            let onConnect = () => {
                // Once a connection has been made, make a subscription and send a message.
                console.log("onConnect");
                client.subscribe("/topic/#");
                let message = new Mqtt.Message("Hello");
                message.destinationName = "/topic/#";
                client.send(message);
            }

            // called when the client loses its connection
            client.onConnectionLost = function onConnectionLost(responseObject) {
                console.log("onConnectionLost:", responseObject);
            }
            
            // called when a message arrives
            client.onMessageArrived = function onMessageArrived(message) {
                console.log("onMessageArrived:" + message.payloadString);
            }

            // connect the client
            client.connect({
                onSuccess: onConnect, 
                mqttVersion: 4,
                userName: 'tttai',
                password: '244466666'
            });

            // client.connect(user, onconnect);
        },
        messageHandler(msg) {
            const payload = JSON.parse(msg.body);
            payload['id'] = msg.headers["message-id"];
            this.messages.push(payload);
        },

        sendMessage() {
            if (this.message) {
                const payload = { message: this.message, user: this.user, id: null };
                let msg = new Mqtt.Message(JSON.stringify(payload));
                client.publish(this.group, msg);
                this.message = '';
            } else {
                console.log('Emty message is ignored!')
            }
        },
    }

}