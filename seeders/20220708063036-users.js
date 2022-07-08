"use strict"

const { hashPass } = require("../helpers/vaildator")

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      { username: "admin", password: "qwerty" },
      { username: "staff", password: "qwerty" },
      { username: "user", password: "qwerty" },
      { username: "user2", password: "qwerty" },
    ]
    users.forEach((user) => {
      user.createdAt = user.updatedAt = new Date()
      user.password = hashPass(user.password)
    })
    await queryInterface.bulkInsert("Users", users, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {})
  },
}
