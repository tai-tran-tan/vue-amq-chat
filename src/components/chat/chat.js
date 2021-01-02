import Stomp from 'stompjs';
import Message from '../message/Message.vue';

var client = undefined;

export default {
    props: {
        name: String,
        group: String
    },
    components: {
        Message,
    },
    data() {
        return {
            messages: [],
            message: ''
        }
    },
    created() {
        this.connect(this.name, this.group);
    },

    methods: {
        connect(user, group) {
            console.log(`connecting user ${user} to group ${group}`);
            client = Stomp.client('ws://localhost:61616');
            let _self = this;
            let onconnect = function (frame) {
                console.log('connected to server!');
                client.subscribe(group, (msg) => _self.messageHandler(msg));
            };
            client.connect(user, '', onconnect);
        },
        messageHandler(msg) {
            const payload = JSON.parse(msg.body);
            payload['id'] = msg.headers["message-id"];
            this.messages.push(payload);
        },

        sendMessage() {
            if (this.message) {
                client.send(this.group, {}, JSON.stringify({ message: this.message, user: this.name, id: null }));
                this.message = '';
            } else {
                console.log('Emty message is ignored!')
            }
        }

    }

}