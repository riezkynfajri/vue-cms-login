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
        if (this.signinData.username === "" || this.signinData.password === "") {
          throw new Error("Please fill in all fields")
        }
        const response = await fetch(`${this.URL}users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.signinData),
        })
        const data = await response.json()
        if (!response.ok) throw new Error(`${data.message}`)
        localStorage.setItem("token", data.token)
        this.signinData.username = ""
        this.signinData.password = ""
        this.move("/")
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: `${err.message}`,
          icon: "error",
          confirmButtonText: "OK",
        })
        console.log(err)
      }
    },

    async signup() {
      try {
        if (this.signupData.username === "" || this.signupData.password === "") {
          throw new Error("Please fill in all fields")
        }
        const response = await fetch(`${this.URL}users/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.signupData),
        })
        const data = await response.json()
        if (!response.ok) throw new Error(`${data.message}`)
        Swal.fire({
          title: "Success",
          text: `${data.message}`,
          icon: "success",
          confirmButtonText: "OK",
        })
        this.signupData.username = ""
        this.signupData.password = ""

        this.move("/signin")
      } catch (err) {
        Swal.fire({
          title: "Error",
          text: `${err.message}`,
          icon: "error",
          confirmButtonText: "OK",
        })
      }
    },
  },
})
