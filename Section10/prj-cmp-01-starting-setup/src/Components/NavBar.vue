<template>
    <div class="navbar">
        <button 
            @click="chooseActivePage('stored-resources')"
            :class="{active: activeButton == 'stored-resources'}" 
            class="button">
            Stored Resources
        </button>
        <button 
            @click="chooseActivePage('add-resources')" 
            :class="{active: activeButton == 'add-resources'}" 
            class="button">
            Add Resources
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeButton: 'stored-resources'
        }
    },
    methods: {
        chooseActivePage(page) {
            this.activeButton = page;
            this.$emit("choose-active-page", page);
        }
    },
    watch: {
        activePage: function(val) {
            this.activeButton = val;
        }
    },
    props: ['activePage']
}
</script>

<style scoped>
.navbar {
    width: 100%;
    border-radius: 15px 15px;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    padding: 2rem;
    margin-bottom: 3rem;
}

.button {
    padding: 1rem;
    background-color: white;
    color: #8c0da6;
    border: none;
    margin-left: 1rem;
    margin-right: 1rem;
    cursor: pointer;
}

.active {
    background-color: #512859;
    color: white;
}
</style>