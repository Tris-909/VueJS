import { createApp } from 'vue'
import App from './App.vue';
import SmallerText from './Components/SmallerText.vue';

const app = createApp(App);

app.component('smaller-text', SmallerText);

app.mount('#app');
