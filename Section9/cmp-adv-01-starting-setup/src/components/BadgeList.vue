<template>
  <basic-card>
    <template v-slot:not-default>
      <h2> Available Badges </h2>
    </template>
    <ul>
      <li>
        <base-badge type="admin" caption="ADMIN"></base-badge>
      </li>
      <li>
        <base-badge type="author" caption="AUTHOR"></base-badge>
      </li>
    </ul>
  </basic-card>
</template>

<script>
import BaseBadge from './BaseBadge';
import BasicCard from './BasicCard';

export default {
  components: {
    'base-badge': BaseBadge,
    'basic-card': BasicCard
  }
}
</script>

<style scoped>
basic-card h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>