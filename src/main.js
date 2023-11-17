import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)

app
    .use(store)
    .use(router)
    .mount('#app')
import "bootstrap/dist/js/bootstrap.js"