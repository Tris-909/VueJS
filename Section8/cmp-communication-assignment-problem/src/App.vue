<template>
    <div class="center">
        <user-data 
            @add-user="addUser"
        />
        <active-user 
            v-for="user in users" 
            :user="user"
            :key="user.id"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [
                {
                    id: 0,
                    name: 'User1',
                    age: '20'
                },
                {
                    id: 1,
                    name: 'User2',
                    age: '21'
                }
            ]
        }
    },
    methods: {
        addUser(name, age) {
            let newUserID = this.users[this.users.length-1].id + 1;
            let newUser = {
                id: newUserID,
                name: name,
                age: age
            }; 

            this.users.push(newUser);   
        }
    }
}
</script>

<style>
.center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>