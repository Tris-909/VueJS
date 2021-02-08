const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    methods: {
        add() {
            this.result = this.result + 5;
        },
        addOne() {
            this.result++;
        }
    },
    computed: {
        reset() {
            if (this.result < 37) {
                return 'Not there yet'
            } else if (this.result == 37) {
                return "Correct"
            } else {
                return "Too much !"
            }
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.result = 0;
            }, 5000);
        }
    }
}).mount('#assignment');