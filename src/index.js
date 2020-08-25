import { createApp } from 'vue'
import App from './App.vue'
import router from "./route/router";
import stroe from './store/store'
createApp(App).use(router).use(stroe).mount('#root')