<template>
    <form class='center'>
        <input type="text" v-model="id" placeholder="ID" />
        <input type="text" v-model="name" placeholder="name" />
        <input type="text" v-model="phone" placeholder="phone" />
        <input type="text" v-model="email" placeholder="email" />
        <input type="checkbox" v-model="isFunny" placeholder="Is This Person Funny ?" />
        <button @click.prevent="addNewFriend">Submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            id: "",
            name: "",
            phone: "",
            email: "",
            isFunny: false
        }
    },
    methods: {
        addNewFriend() {
            this.$emit('add-friend', this.id, this.name, this.phone, this.email, this.isFunny);
        }
    }
}
</script>

<style>
  .center {
      display: flex;
      flex-direction:row;
      align-content: center;
      justify-content: center;
      margin-bottom: 10px;
  }
</style>