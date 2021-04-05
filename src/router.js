import { createRouter, createWebHistory } from 'vue-router';
import Chat from './components/chat/Chat.vue'
import Portal from './components/portal/Portal.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', component: Portal,
            children: [
                { name: 'chat-view', path: 'chat/:id', component: Chat, props: true},
            ]
        },
    ]
});