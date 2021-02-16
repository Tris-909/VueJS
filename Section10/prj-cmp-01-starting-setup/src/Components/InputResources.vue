<template>
    <form class='container'>
        <p>Title</p>
        <input type="text" v-model="title" />
        <p>Description</p>
        <textarea v-model="description" />
        <p>Link</p>
        <input type="text" v-model="link" />

        <div>
            <button class="addResources" @click.prevent="addNewResources"> Add Resources </button>
        </div>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: "",
            description: "",
            link: ""
        }
    },
    methods: {
        addNewResources() {
            if (this.title == "" || this.description == "" || this.link == "") {
                alert('You have to fill all the information before submit !');
            } else {
                let newResources = {
                    name: this.title,
                    description: this.description,
                    link: this.link
                }

                this.title = "";
                this.description = "";
                this.link = "";

                this.$emit("add-new-resources", newResources);
            }
        }
    }
}
</script>

<style scoped>
    .container {
        width: 100%;
        border-radius: 15px 15px;
        box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
        padding: 1.5rem;
        margin: 0px;
    }

    input {
        width: 100%;
    }

    textarea {
        width: 100%;
    }

    p {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    .addResources {
        padding: 1rem;
        margin-top: 2rem;
        border: none;
        cursor: pointer;
        background-color: #512859;
        color: white;
    }
</style>