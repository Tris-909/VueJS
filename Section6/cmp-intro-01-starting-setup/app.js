const root = Vue.createApp({
    data() {
        return {
            users: [
                {
                    id: 0,
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                }, 
                {
                    id: 1,
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },
                {
                    id: 2,
                    name: 'Testing',
                    phone: 'testing',
                    email: 'testing'
                }
            ]
        }
    }
});

root.component('user-display', {
    data() {
        return {
            isShow: true
        }
    },
    props: ['user'],
    methods: {
        toggleDisplay() {
            this.isShow = !this.isShow;
        }
    },
    template: `
    <li>
        <h2> {{ user.name }} </h2>
        <button @click="toggleDisplay">Show Details</button>
        <ul v-show="isShow">
          <li><strong>Phone:</strong> {{ user.phone }}</li>
          <li><strong>Email:</strong> {{ user.email }}</li>
        </ul>
    </li>
    `
})

root.mount('#app');