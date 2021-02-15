<template>
    <form class="form">
        <input type="text" v-model="name" placeholder="Name" />
        <input type="text" v-model="age" placeholder="Age" />
        <button @click.prevent="addNewUser"> Submit </button> 
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            age: ""
        }
    },
    methods: {
        addNewUser() {
            this.$emit('add-user', this.name, this.age);
        }
    }
}
</script>

<style>
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>