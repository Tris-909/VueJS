const app = Vue.createApp({
  data() {
    return { goals: [], singleGoal: "" };
  },
  methods: {
    addGoalToList() {
      this.goals.push(this.singleGoal);
      this.singleGoal = "";
      console.log(this.goals);
    },
    deleteItem(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
