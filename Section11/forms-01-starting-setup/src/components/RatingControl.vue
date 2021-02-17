<template>
    <ul>
        <li><button 
            type="button" 
            @click="turnOnActive('poor')"
            :class="{active: modelValue == 'poor'}">poor</button></li>
        <li><button 
            type="button" 
            @click="turnOnActive('average')" 
            :class="{active: modelValue == 'average'}">average</button></li>
        <li><button 
            type="button" 
            @click="turnOnActive('great')" 
            :class="{active: modelValue == 'great'}">great</button></li>
    </ul>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
        turnOnActive(name) {
            this.isActive = name;
            this.$emit('update:modelValue', name);
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0px;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-content: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}

.active {
    border: 2px solid red;
}
</style>