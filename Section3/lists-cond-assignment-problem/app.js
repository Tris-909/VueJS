const app = Vue.createApp({
    data() {
        return {
            input: "",
            items: [],
            show: true
        }
    },
    methods: {
        addTask() {
            this.items.push(this.input);
            this.input = "";
        },
        toggleShow() {
            this.show = !this.show;
        }
    }
}).mount('#assignment');