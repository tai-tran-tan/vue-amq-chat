import Stomp from 'stompjs';

var client = undefined;

export default {
    data() {
        return {
            messages: [],
            message: ''
        }
    },
    props: {
        name: String,
        group: String
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
                client.subscribe(group, (msg) => _self.messageHandler(msg.body));
            };
            client.connect(user, '', onconnect);
        },
        messageHandler(msg) {
            this.messages.push(JSON.parse(msg));
        },

        sendMessage() {
            client.send(this.group, {}, JSON.stringify({message: this.message, user: this.name}));
            this.message = '';
        }

    }

}