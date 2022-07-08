const express = require("express")
const RevenueController = require("../controllers/revenueController")
const router = express.Router()

router.get("/", RevenueController.getRevenue)

module.exports = router
