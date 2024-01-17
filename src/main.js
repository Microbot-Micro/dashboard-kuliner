import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueToast from "vue-toast-notification";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/main.css'
import "vue-toast-notification/dist/theme-sugar.css";

const app = createApp(App);

app.use(router);
app.use(VueToast);

app.mount('#app');
