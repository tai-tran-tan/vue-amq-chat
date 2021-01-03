import Stomp from 'stompjs';

export default class StompClient {
    constructor() {
        this.client = Stomp.client('ws://localhost:61616');
    }
    
    send(destination, payload) {
        this.client.send(destination, {}, JSON.stringify(payload));
    }

    subscribe(destination, callback) {
        this.client.subscribe(destination, callback);
    }

    connect(user, callback) {
        this.client.connect(user, '', callback);
    }

    disconnect(callback) {
        this.client.disconnect(callback);
    }
}