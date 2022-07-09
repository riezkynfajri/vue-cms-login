"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    const revenues = [
      { month: "January", revenue: 400 },
      { month: "February", revenue: 300 },
      { month: "March", revenue: 300 },
      { month: "April", revenue: 400 },
      { month: "May", revenue: 400 },
      { month: "June", revenue: 300 },
      { month: "July", revenue: 400 },
      { month: "August", revenue: 700 },
      { month: "September", revenue: 300 },
      { month: "October", revenue: 400 },
      { month: "November", revenue: 800 },
      { month: "December", revenue: 900 },
    ]
    revenues.forEach((revenue) => (revenue.createdAt = revenue.updatedAt = new Date()))
    await queryInterface.bulkInsert("Revenues", revenues, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Revenues", null, {})
  },
}
