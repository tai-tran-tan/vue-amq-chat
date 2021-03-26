import SelectButton from 'primevue/selectbutton';
export default {
    components: {SelectButton},
    data() {
        return {
            name: 'Bob',
            group: ''
        }
    },
    methods: {
        connect: function(e) {
            this.$router.push({path: '/chat', query : {name: this.name, group: this.group}});
        }
    }
}