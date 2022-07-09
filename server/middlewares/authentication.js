"use strict"

const { readToken } = require("../helpers/vaildator")
const { User } = require("../models/index")

module.exports = async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers
    if (!access_token) throw new Error("user not found")
    const payload = readToken(access_token)

    const foundUser = await User.findByPk(+payload.id)
    if (!foundUser) throw new Error("user not found")

    req.userData = { id: foundUser.id, username: foundUser.username }
    next()
  } catch (err) {
    next(err)
  }
}
