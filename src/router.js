import {createRouter, createWebHashHistory} from 'vue-router';
import Chat from './components/chat/Chat.vue'
import Portal from './components/portal/Portal.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: Portal },
        { path: '/chat', component: Chat , props: route => ({name: route.query.name, group: route.query.group})},
    ]
});