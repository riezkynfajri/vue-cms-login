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

router.beforeEach((to, from) => {
  if (to.name === "signin" || to.name === "signup") {
    if (localStorage.getItem("token")) {
      Swal.fire({
        title: "Already signed in",
        text: "You are already signed in",
        icon: "warning",
        confirmButtonText: "OK",
      })
      return { name: "home" }
    }
  }
  if (to.name === "home") {
    if (!localStorage.getItem("token")) {
      Swal.fire({
        title: "Not signed in",
        text: "You must be signed in to view this page",
        icon: "warning",
        confirmButtonText: "OK",
      })
      return { name: "signin" }
    }
  }
})

export default router
