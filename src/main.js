import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue'
import Chat from './components/chat/Chat.vue'
import Portal from './components/portal/Portal.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Portal },
        { path: '/chat', component: Chat , props: route => ({name: route.query.name, group: route.query.group})},
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
