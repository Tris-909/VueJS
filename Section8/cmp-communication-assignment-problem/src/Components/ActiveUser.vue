<template>
    <div class="container">
        <h2>{{user.name}}</h2>
        <h3>{{user.age}}</h3>
    </div>
</template>

<script>
export default {
    props: ['user']
}
</script>

<style>
    .container {
        border: 1px solid black;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 1rem;
        width: 30%;
    }
</style>