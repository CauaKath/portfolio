import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap, faBriefcase, faLightbulb } from '@fortawesome/free-solid-svg-icons'

library.add(faGraduationCap, faBriefcase, faLightbulb)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(createPinia())
  .mount('#app')
