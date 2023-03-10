import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import Vue from 'vue'
import axios from 'axios'
window.axios= axios;



createApp(App).use(store).use(router).mount('#app')
