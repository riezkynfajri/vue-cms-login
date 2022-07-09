<script>
import { useCMSStore } from "../stores/CMS"
import { mapWritableState, mapActions } from "pinia"
import Chart from "chart.js/auto"

export default {
  computed: {
    ...mapWritableState(useCMSStore, ["revenue"]),
  },
  methods: {
    ...mapActions(useCMSStore, ["home", "signout"]),
  },
  created() {
    this.home()
  },
  mounted() {
    setTimeout(() => {
      const months = this.revenue.map((el) => {
        return el.month
      })
      const revenues = this.revenue.map((el) => el.revenue)
      const ctx = document.getElementById("myChart")
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: months,
          datasets: [
            {
              label: "Revenue in USD",
              data: revenues,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })

      myChart
    }, 500)
  },
}
</script>
<template>
  <div class="flex flex-col w-full justify-start items-end">
    <button
      @click="signout"
      class="bg-rose-500 text-white w-24 h-8 text-center rounded-lg mr-4 mt-4 hover:text-rose-500 hover:bg-white hover:shadow-rose-400 hover:shadow-lg hover:scale-110 duration-500"
    >
      signout
    </button>
  </div>
  <div class="flex flex-col w-full items-center">
    <canvas id="myChart" class="bg-white h-96 w-96 mx-12 p-12 mt-8 rounded-lg"></canvas>
  </div>
</template>
