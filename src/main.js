import { createApp } from 'vue'
import App from './App.vue'
import components from '@/componens/UI'
// import router from './router'
// import store from './store'

const app = createApp(App)

app
// .use(router)
.mount('#app')

components.forEach(elem => {
   app.component(elem.name, elem)
});


