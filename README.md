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
