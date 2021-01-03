import Message from '../message/Message.vue';
import StompClient from '../../js/StompClient';

let client = null;
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

    mounted() {
        let _self = this;
        client = new StompClient();
        this.connect(this.name, this.group);
        window.addEventListener('beforeunload', () => client.send(_self.group, { message: `${_self.name} has left`, user: 'admin', id: null }));
    },
    beforeUnmount() {
        let _self = this;
        client.disconnect(function() {
            client.send(_self.group, { message: `${_self.name} has left`, user: 'admin', id: null })
        });
    },
    methods: {
        connect(user, group) {
            console.log(`connecting user ${user} to group ${group}`);
            let _self = this;
            let onconnect = function (frame) {
                console.log('connected to server!');
                client.subscribe(group, (msg) => _self.messageHandler(msg));
                client.send(_self.group, { message: `${user} has joined`, user: 'admin', id: null });
            };
            client.connect(user, onconnect);
        },
        messageHandler(msg) {
            const payload = JSON.parse(msg.body);
            payload['id'] = msg.headers["message-id"];
            this.messages.push(payload);
        },

        sendMessage() {
            if (this.message) {
                client.send(this.group,{ message: this.message, user: this.name, id: null });
                this.message = '';
            } else {
                console.log('Emty message is ignored!')
            }
        }

    }

}