const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: ''
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  },
  watch: {
    name(value) {
      this.fullName = value + ` Tran`;
    }
  }
});

app.mount('#events');
