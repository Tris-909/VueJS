const dynamicStyling = Vue.createApp({
    data() {
        return {
            input: '',
            isShow: true,
            choosenColor: ''
        }
    },
    methods: {
        toggleVisibility() {
            this.isShow = !this.isShow;
        }
    }
}).mount('#assignment');