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

Creating ActiveMQ Artemis instance at: /path/chat-broker

--user: is a mandatory property!
Please provide the default username:
my-user-name

--password: is mandatory with this configuration:
Please provide the default password:
*******

--allow-anonymous | --require-login: is a mandatory property!
Allow anonymous access?, valid values are Y,N,True,False
Y

Auto tuning journal ...
done! Your system can make 125 writes per millisecond, your journal-buffer-timeout will be 8000

You can now start the broker by executing:  

   "/path/chat-broker/bin/artemis" run

Or you can run the broker in the background using:

   "/path/chat-broker/bin/artemis-service" start
```

### Start the broker

```sh
./chat-broker/bin/artemis run 
WARNING: An illegal reflective access operation has occurred
WARNING: Illegal reflective access by com.sun.xml.bind.v2.runtime.reflect.opt.Injector$1 (file:/path/lib/jaxb-impl-2.2.7.jar) to method java.lang.ClassLoader.defineClass(java.lang.String,byte[],int,int)
WARNING: Please consider reporting this to the maintainers of com.sun.xml.bind.v2.runtime.reflect.opt.Injector$1
WARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations
WARNING: All illegal access operations will be denied in a future release
     _        _               _
    / \  ____| |_  ___ __  __(_) _____
   / _ \|  _ \ __|/ _ \  \/  | |/  __/
  / ___ \ | \/ |_/  __/ |\/| | |\___ \
 /_/   \_\|   \__\____|_|  |_|_|/___ /
 Apache ActiveMQ Artemis 2.16.0


Jan 02, 2021 11:18:22 AM java.lang.System$LoggerFinder lambda$accessProvider$0
WARNING: Failed to instantiate LoggerFinder provider; Using default.
2021-01-02 11:18:22,828 INFO  [org.apache.activemq.artemis.integration.bootstrap] AMQ101000: Starting ActiveMQ Artemis Server
# Some log cutted out
2021-01-02 11:18:23,414 INFO  [org.apache.activemq.artemis.core.server] AMQ221020: Started EPOLL Acceptor at 0.0.0.0:61616 for protocols [CORE,MQTT,AMQP,STOMP,HORNETQ,OPENWIRE]
# Some log cutted out
2021-01-02 11:18:24,040 INFO  [org.apache.activemq.artemis] AMQ241001: HTTP Server started at http://localhost:8161
2021-01-02 11:18:24,040 INFO  [org.apache.activemq.artemis] AMQ241002: Artemis Jolokia REST API available at http://localhost:8161/console/jolokia
2021-01-02 11:18:24,040 INFO  [org.apache.activemq.artemis] AMQ241004: Artemis Console available at http://localhost:8161/console
# Your chat-broker is now ready
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
