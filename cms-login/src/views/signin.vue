<script>
import { useCMSStore } from "../stores/CMS"
import { mapWritableState, mapActions } from "pinia"

export default {
  data() {
    return {}
  },
  computed: {
    ...mapWritableState(useCMSStore, ["signinData"]),
  },
  methods: {
    ...mapActions(useCMSStore, ["signin", "move"]),
  },
}
</script>
<template>
  <div class="grid h-screen place-items-center">
    <form
      @submit.prevent="signin"
      method="post"
      class="bg-white rounded-lg flex flex-col items-center justify-start p-12"
    >
      <h1 class="text-zinc-600 text-xl mb-6">Signin</h1>
      <input
        placeholder="Username"
        type="text"
        class="w-48 mb-4 placeholder:text-sky-500 text-center outline-none border-b-2 border-white focus:border-sky-500 duration-500"
        v-model="signinData.username"
      />
      <input
        placeholder="Password"
        type="password"
        class="w-48 placeholder:text-sky-500 text-center outline-none border-b-2 border-white focus:border-sky-500 duration-500"
        v-model="signinData.password"
      />
      <button
        type="submit"
        class="mt-4 h-8 w-24 rounded-md bg-emerald-400 text-white hover:text-emerald-400 hover:bg-white hover:shadow-sm hover:shadow-emerald-300 hover:scale-110 duration-500"
      >
        submit
      </button>
      <p class="text-center text-zinc-600 text-base">OR</p>
      <button
        @click="move('/signup')"
        class="text-center text-white bg-blue-500 h-8 w-24 rounded-md hover:scale-110 hover:text-blue-500 hover:bg-white hover:shadow-sm hover:shadow-sky-300 duration-500"
      >
        signup
      </button>
    </form>
  </div>
</template>
