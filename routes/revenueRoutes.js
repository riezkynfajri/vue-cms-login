const express = require("express")
const RevenueController = require("../controllers/revenueController")
const authentication = require("../middlewares/authentication")
const router = express.Router()

router.get("/", authentication, RevenueController.getRevenue)

module.exports = router
