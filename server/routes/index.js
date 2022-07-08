const express = require("express")
const router = express.Router()
const users = require("./userRoutes")
const revenue = require("./revenueRoutes")

router.get("/", (req, res) => {
  res.send("Welcome to the CMS server")
})

router.use("/users", users)
router.use("/revenue", revenue)

module.exports = router
