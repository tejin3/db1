import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api.js'

// 폴더까지만 가고 이름을 선택해주지 않으면 그 안의 index.js로 무조건!!! 선언

createApp(App)
  .use(store)
  .use(router)
  .mixin(api)
  .mount('#app')
