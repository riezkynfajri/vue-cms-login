import { defineStore } from "pinia"
import Swal from "sweetalert2"

export const useCMSStore = defineStore({
  id: "CMS",
  state: () => ({
    URL: "https://vue-cms-fd.herokuapp.com/",
    signinData: {
      username: "",
      password: "",
    },
    signupData: {
      username: "",
      password: "",
    },
    signedIn: false,
    revenue: null,
  }),
  actions: {
    move(page) {
      this.router.push(`${page}`)
    },
    signout() {
      localStorage.clear()
      Swal.fire({
        title: "Signed out",
        text: "You have been signed out",
        icon: "success",
        confirmButtonText: "OK",
      })
      this.signedIn = false
    },
    async signin() {
      try {
        const response = await fetch(`${this.URL}users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.signinData),
        })
        const data = await response.json()
        localStorage.setItem("token", data.token)
        console.log(data.token)
      } catch (err) {
        console.log(err)
      }
    },
  },
})
