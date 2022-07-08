"use strict"
const { Model } = require("sequelize")
const { hashPass } = require("../helpers/vaildator")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "This username is taken",
        },
        validate: {
          notNull: { msg: "Username is required" },
          notEmpty: { msg: "Username is required" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Password is required" },
          notEmpty: { msg: "Password is required" },
        },
      },
    },
    {
      sequelize,
      hooks: {
        beforeBulkCreate(instance, options) {
          instance.password = hashPass(instance.password)
        },
      },
      modelName: "User",
    }
  )
  return User
}
