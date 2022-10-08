import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router/index'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {createMetaManager} from "vue-meta"
library.add(fas, far, fab)
const app = createApp(App)
app.use(router)
app.use(VueSweetalert2);
app.use(createMetaManager())
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
