# vue-chat
A sample chat application using VueJS, ActiveMQ and Stomp over websocket



## Backend setup



### Get Artemis

Download the Artemis latest version from https://activemq.apache.org/components/artemis/download/ and extract it.

### Create a broker

```sh
# Change directory to the extracted folder
cd apache-artemis-2.16.0
./bin/artemis create chat-broker
```

### Start the broker

```sh
./chat-broker/bin/artemis run
# Wait some moments and your `chat-broker` is ready
```



## Frontend setup



### Install dependencies

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
