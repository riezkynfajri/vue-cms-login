import { createApp, markRaw } from "vue"
import { createPinia } from "pinia"
import "./assets/index.css"
import App from "./App.vue"
import router from "./router"
import VueSweetalert2 from "vue-sweetalert2"
import "sweetalert2/dist/sweetalert2.min.css"

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => (store.router = markRaw(router)))

app.use(pinia)
app.use(router)
app.use(VueSweetalert2)
app.mount("#app")
