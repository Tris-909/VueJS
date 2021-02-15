<template>
  <div>
    <the-header></the-header>
    <button @click="toggleIsShow('active-goal')">active goal</button>
    <button @click="toggleIsShow('manage-goals')">manage goal</button>
    <component :is="this.currentGoal"></component>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader';
import ManageGoals from './components/ManageGoals';
import ActiveGoals from './components/ActiveGoals';

export default {
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
      currentGoal: 'active-goal'
    };
  },
  methods: {
    toggleIsShow(goal) {
      this.currentGoal = goal;
    }
  },
  components: {
    'the-header': TheHeader,
    'manage-goals': ManageGoals,
    'active-goal': ActiveGoals
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>