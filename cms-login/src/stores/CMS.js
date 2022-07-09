import { defineStore } from "pinia"
import Swal from "sweetalert2"

export const useCMSStore = defineStore({
  id: "CMS",
  state: () => ({
    URL: "https://vue-cms-fd.herokuapp.com/",
    signinData: {
      email: "",
      password: "",
    },
    signupData: {
      email: "",
      password: "",
    },
    signedIn: false,
    revenue: null,
  }),
  actions: {
    move(page) {
      this.router.push(`${page}`)
    },
    signOut() {
      localStorage.clear()
      Swal.fire({
        title: "Signed out",
        text: "You have been signed out",
        icon: "success",
        confirmButtonText: "OK",
      })
      this.signedIn = false
    },
    async signIn() {
      const data = await fetch(`${this.URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.signinData),
      })
      console.log(data)
    },
  },
})
