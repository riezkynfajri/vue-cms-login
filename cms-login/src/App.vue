<script>
import { mapWritableState, mapActions } from "pinia"
import { RouterView } from "vue-router"
import { useCMSStore } from "@/stores/CMS.js"

export default {
  components: {
    RouterView,
  },
}
</script>
<template>
  <div class="bg-repeat min-h-screen bg-gradient-to-br from-sky-500 via-emerald-500 to-emerald-500">
    <RouterView />
  </div>
</template>
