"use strict"

const { Revenue } = require("../models")

class RevenueController {
  static async getRevenue(req, res, next) {
    try {
      const revenue = await Revenue.findAll()

      res.status(200).json(revenue)
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = RevenueController
