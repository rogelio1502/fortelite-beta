import { createApp } from 'vue'
import router from './plugins/vue-router'
import App from './App.vue'
//214583
createApp(App)
  .use(router)
  .mount('#app')
