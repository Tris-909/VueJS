const app = Vue.createApp({
    data() {
        return {
            name: 'Tri Minh Tran',
            age: 21,
            catLink: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'
        }
    },
    methods: {
        throwARandomNumber() {
            const random = Math.random();
            return random;
        },
        myAgePlusFive() {
            return this.age + 5;
        }
    }
}).mount('#assignment');