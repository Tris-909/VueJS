const app = Vue.createApp({
    data() {
        return {
           dynamicStyle: [false, false, false] 
        }
    },
    methods: {
        turnStyleOn(position) {
            let currentPossition = parseFloat(position);
            this.dynamicStyle[currentPossition] = !this.dynamicStyle[currentPossition];
        }
    }
}).mount('#styling');