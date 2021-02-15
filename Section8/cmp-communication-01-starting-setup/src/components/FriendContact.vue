<template>
  <li>
    <h2>{{ friend.name }} - {{ friend.isFunny === true ? ':)' : ':|' }}</h2>

    <div class="cen">
      <button class="row" @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <button class="row" @click="this.toggleFunny()">{{ friend.isFunny ? 'Less funny' : 'More Funny' }}</button>
      <button class="row" @click="deleteFriend"> Delete </button>
    </div>

    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }} - {{ randomNumber }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFunny() {
      this.$emit('toggle-favourite', this.friend.id);
    },
    deleteFriend() {
      this.$emit('delete-friend', this.friend.id);
    }
  },
  props: {
    friend: {
      id: {
        type: String,
        required: true
      },
      name: String,
      phone: String,
      email: String,
      isFunny: Boolean
    },
    randomNumber: Number
  },
  emits: ['toggle-favorite']
};
</script>

<style>
  .row {
    margin: 1rem;
  }
  .cen {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>