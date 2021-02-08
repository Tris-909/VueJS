const app = Vue.createApp({
    data() {
        return {
            data: '',
            show: ''
        }
    },
    methods: {
        showAlert() {
            alert('123');
        },
        setData(event) {
            this.data = event.target.value;
        },
        showData(event) {
            this.show = event.target.value;
        }
    }
}).mount('#assignment');