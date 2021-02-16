<template>
    <ul>
        <li
            v-for="data in dataList"
            :key="data.id"
            class="container"
        >
            <div class='first-line'>
                <h2>{{data.name}}</h2>
                <button 
                    class='deleteButton'
                    @click="deleteResource(data.id)"
                >Delete</button>
            </div>
            <p>{{data.description}}</p>
            <a :href="data.link" target="_blank" class="viewResources">View Resources</a>
        </li>
    </ul>
</template>

<script>
export default {
    inject: ['dataList'],
    methods: {
        deleteResource(id) {
            this.$emit("delete-a-resource", id);
        }
    }
}
</script>

<style scoped>
    ul {
        padding-left: 0px;
    }
    ul li {
        list-style: none;
    }
    .container {
        width: 100%;
        border-radius: 15px 15px;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        padding: 2rem;
        margin-bottom: 1rem;
    }
    .container p {
        font-size: 1.5rem;
    }
    .first-line {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-content: center;
    }
    .deleteButton {
        border: none;
        background-color: white;
        color: purple;
        cursor: pointer;
    }
    .viewResources {
        color: orange;
        text-decoration: none;
        font-weight: 700;
        font-size: 1.5rem;
    }
</style>