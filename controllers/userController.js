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

  static async login(req, res, next) {
    try {
      const { username, password } = req.body
      const foundUser = await User.findOne({ where: { username } })
      if (!foundUser) throw new Error("invalid")

      const correctPass = comparePass(password, foundUser.password)
      if (!correctPass) throw new Error("invalid")
      const payload = {
        id: foundUser.id,
        username: foundUser.username,
      }

      const token = createToken(payload)
      res.status(200).json({ token })
    } catch (err) {
      next(err)
    }
  }
}
