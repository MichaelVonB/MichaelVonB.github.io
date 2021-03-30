import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store'
import '/src/styles/global.css';

createApp(App)
.use(router)
.use(store)
.mount('#app')
