<script>
import { useCMSStore } from "../stores/CMS"
import { mapWritableState, mapActions } from "pinia"

export default {
  data() {
    return {}
  },
  computed: {
    ...mapWritableState(useCMSStore, ["signupData"]),
  },
  methods: {
    ...mapActions(useCMSStore, ["signup"]),
  },
}
</script>
<template>
  <div class="grid h-screen place-items-center">
    <form
      @submit.prevent="signup"
      method="post"
      class="bg-white rounded-lg flex flex-col items-center justify-start p-12"
    >
      <h1 class="text-zinc-600 text-xl mb-6">Create a new Account</h1>
      <input
        placeholder="Username"
        type="text"
        class="w-56 text-lg mb-4 placeholder:text-sky-500 text-center outline-none border-b-2 border-sky-500 focus:border-rose-500 duration-500"
        v-model="signupData.username"
      />
      <input
        placeholder="Password"
        type="password"
        class="w-56 text-lg placeholder:text-sky-500 text-center outline-none border-b-2 border-sky-500 focus:border-rose-500 duration-500"
        v-model="signupData.password"
      />
      <button
        type="submit"
        class="mt-4 h-8 w-24 rounded-md bg-indigo-400 text-white hover:text-indigo-400 hover:bg-white hover:shadow-md hover:shadow-purple-500 hover:scale-110 duration-500"
      >
        submit
      </button>
    </form>
  </div>
</template>
