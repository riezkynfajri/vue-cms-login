import { createRouter, createWebHistory } from "vue-router"
import Swal from "sweetalert2"
import signin from "../views/signin.vue"
import signup from "../views/signup.vue"
import revenue from "../views/revenue.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: revenue,
    },
    {
      path: "/signin",
      name: "signin",
      component: signin,
    },

    {
      path: "/signup",
      name: "signup",
      component: signup,
    },
  ],
})

export default router
