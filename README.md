# VueJS

Learning VueJS through a course from Udemy

## Section 2

### Create and Connect A Vue Application then declare data and bind output data to HTML file

- `{{ }}` This is called Interpolation

- html file :

```html
<section id="user-goal">
  <h2>My Course Goal</h2>
  <p>{{ goal1 }}</p>
</section>
```

- javascript file :

```javascript
const app = Vue.createApp({
  data() {
    return {
      goal: "Finish this Course",
      vueLink: "https://v3.vuejs.org",
    };
  },
});

app.mount("#user-goal");
```

### Interpolation but working with link tag for HTML : v-bind

- Assume we have vueLink return on data from createApp like above, This HTML code won't output vueLink like you do above :

```html
<p>Learn more <a href="{{ vueLink }}"></a></p>
```

- This is where we use v-bind method :

```html
<p>Learn more <a v-bind:href="vueLink"></a></p>
```

### Declare methods (functions) with VueJS App and use it inside interpolation

- There is another options for createApp from VueJS allow users to declare an object that contains funtions (yes plural) and you can also call it in interpolation like this :

```javascript
const app.createApp({
    data() {
        return {
            goal1: 'Try to finish this course !',
            goal2: 'Smile',
            vueLink: 'https://v3.vuejs.org/'
        }
    },
    methods() {
        aFunction() {
            return 'haha'
        }
    }
}).mount("#example");
```

```html
<div id="example">{{ aFunction() }}</div>
```

### Adding HTML Elements instead of texts or functions into interpolation using v-html

```javascript
const app = Vue.createApp({
  data() {
    return {
      html: "<h1> Ops </h1>",
    };
  },
}).mount("#test");
```

```html
<p id="test" v-html="html"></p>
```

- Code above will return HTML element if you want to output HTML Elements instead of texts or functions by using v-html.

- v-html is also used to return functions if you want

### Adding eventListener with Vue using v-on:(event)

- HTML Code :

```html
<section id="events">
  <h2>Events in Action</h2>
  <button v-on:click="add(1)">Add</button>
  <button v-on:click="remove">Remove</button>
  <p>Result: {{ counter }}</p>
</section>
```

- Javascript Code :

```javascript
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add(num) {
      return (this.counter = this.counter + num);
    },
    remove() {
      return (this.counter = this.counter - 1);
    },
  },
}).mount("#events");
```

- We use v-on:(events) like v-on:click to add Cick event through VueJS. We can have many different events.

- v-on:click="" for click event
- v-on:input="function($event, arguments)" for onChange of input element
- v-on:submit.prevent="" for form submission
- v-once for making sure that the data in their won't change
- v-model for two-way binding of input element

### Computed and Watch Options on Vue.createApp

- we use `computed` when we need a state that related to other states.
- we use `watch` the same way we user useEffect in React but watch only triggers when the value we set up change.

### Shorthand for v-bind: and v-on:

- v-bind:class => :class
- v-on:click => @click

### Binding dynamic classes with VueJS

```html
<section id="styling">
  <div
    class="demo"
    :class="{active: dynamicStyle[0]}"
    @click="toggleStyles(0)"
  ></div>
</section>
```

- We won't go into javascript file because the logic there is simple. It is just for turning dynamicStyle value from false to true and the opposite.

- What we learn here are dynamic binding classes from VueJS :
  - `class` will decide what class this div will always have
  - `:class` stands for v-bind:class. This is used for binding new class based on the codition. In this case, dynamicStyle is that condition.
  - `@click` is for onCLickHandler

### List rendering with VueJS and conditional rendering

- v-if="", v-else-if="" and v-else to conditional rendering. (remove the element)
- v-show (add display="none" to the element but does not mean that the element is not existed)
- v-for="(item, index) in items" for list rendering, child element is maybe <p>{{ item }}</p>
- v-for="num in 10"

### Create a component just like React and pass props to it :

- The idea about components in VueJS is somewhat the same like React. You create a piece chunk of code that works at the same way as a Vue app but now we can call it "mini Vuea app" and connect all of mini app into 1 big application VueJS. (React same :) )

- In the example below, we will create all components inside of one file but section 6 we will learn how to divide them into many files. This example will be the combinaiton of list rendering and vuejs component so obviously you can create a component and only use it once.

```javascript
const root = Vue.createApp({
  data() {
    return {
      users: [
              {
                  name: 'Manuel Lorenz',
              },
              {
                  name: 'Julie Jones',
              }
      ]
    }
  }
});

root.component('name-of-the-component', {
  props: ['user']
  template: `
    <h1>{{ user.name }}</h1>
  `,
});

root.mount('#app');
```

```html
<div id="app">
  <name-of-the-component
    v-for="(user, index) in users"
    :user="user"
    :key="index"
  />
</div>
```

### Create new project

- Installing VueCLI first : npm install -g @vue/cli
- Go to the directory and create new project : vue create my-first-app
