<template>
  <basic-card>
    <template v-slot:not-default>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>

    <p>{{ infoText }}</p>
  </basic-card>
</template>

<script>
import BasicCard from './BasicCard';

export default {
  props: ['fullName', 'infoText', 'role'],
  components: {
    'basic-card': BasicCard
  }
};
</script>

<style scoped>
basic-card div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>