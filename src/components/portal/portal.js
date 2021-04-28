import Chat from '../chat/Chat.vue';
export default {
    components: { Chat },
    data() {
        return {
            name: 'Bob',
            group:'',
            groupList: [{
                id: 'group1',
                name: 'Pizza'
            },
            {
                id: 'group2',
                name: 'Pho'
            }]
        }
    },
    methods: {
        connect: function(e) {
            // this.$router.push({path: '/chat', query : {name: this.group, group: this.group}});
        },
        activate(group) {
            this.group = group;
            // this.$router.push({ name: 'chat-view', params: {id: group.id, group: group.group, user: this.name} });
            console.log('activating', group);
        }
    }
}