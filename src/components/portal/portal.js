export default {
    data() {
        return {
            name: '',
            group: ''
        }
    },
    methods: {
        connect: function(e) {
            this.$router.push({path: '/chat', query : {name: this.name, group: this.group}});
        }
    }
}