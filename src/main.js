import { createApp } from 'vue'
import router from './plugins/vue-router'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.min.css';


//214583
createApp(App)
  .use(router)
  .mount('#app')
