const app = Vue.createApp({
    data(){
        return {
            goal1: 'Try to finish this course !',
            goal2: 'Smile',
            html: '<h1>My Name is Tri Minh Tran</h1>',
            vueLink: 'https://v3.vuejs.org/'
        }
    },
    methods: {
        rollTheDiced() {
            const randomNumber = Math.random();
            if (randomNumber >= 0.5) {
                return this.goal1
            } else {
                return this.goal2
            }
        }
    }
});

app.mount('#user-goal');