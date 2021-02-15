<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend 
      @add-friend="this.addFriend"
    />
    <ul>
      <friend-contact 
        :randomNumber="randomNumber" 
        :friend="friend" 
        v-for="(friend, index) in friends" 
        :key="index" 
        @toggle-favourite="this.toggleIsFunny"  
        @delete-friend="this.deleteAFriend"
      />
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFunny: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFunny: false,
        }
      ],
      randomNumber: 10
    };
  },
  methods: {
    toggleIsFunny(id) {
      let position;
      for (let i = 0; i < this.friends.length; i++) {
        if (this.friends[i].id === id) {
          position = i;
        }
      }

      console.log(`Before `, this.friends[position].isFunny);
      this.friends[position].isFunny = !this.friends[position].isFunny;
      console.log(`After `, this.friends[position].isFunny);
    },
    addFriend(id, name, phone, email, isFunny) {
      let newFriend = {
        id,
        name,
        phone,
        email,
        isFunny
      };

      this.friends.push(newFriend);
    },
    deleteAFriend(id) {
      let position;
      for (let i = 0; i < this.friends.length; i++) {
        if (this.friends[i].id === id) {
          position = i;
        }
      }

      this.friends.splice(position, 1);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>