export default {
    data() {
        return {
            name: 'Bob',
            group:'',
            groupList: [{
                id: 'group1',
                group: 'Pizza'
            },
            {
                id: 'group2',
                group: 'Pho'
            }]
        }
    },
    methods: {
        connect: function(e) {
            // this.$router.push({path: '/chat', query : {name: this.group, group: this.group}});
        },
        activate(group) {
            group['user'] = this.name;
            this.group = group;
            this.$router.push({ name: 'chat-view', params: group });
            console.log('activating', group);
        }
    }
}