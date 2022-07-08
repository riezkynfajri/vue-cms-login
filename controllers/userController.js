"use strict"
const { comparePass, createToken } = require("../helpers/vaildator")
const { User } = require("../models/index")

module.exports = class UserController {
  static async register(req, res, next) {
    try {
      const { username, password } = req.body
      await User.create({
        username,
        password,
      })
      res.status(201).json({ message: "Account created" })
    } catch (err) {
      next(err)
    }
  }
}
