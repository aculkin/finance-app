const Sequelize = require('sequelize')
const db = require('../database')

const User = db.define(
  'user',
  {
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      get() {
        return () => this.getDataValue('password')
      },
    },
    salt: {
      type: Sequelize.STRING,
      get() {
        return () => this.getDataValue('salt')
      },
    },
    googleId: {
      type: Sequelize.STRING,
    },
    facebookId: {
      type: Sequelize.STRING,
    },
    resetPasswordToken: {
      type: Sequelize.STRING,
    },
    resetPasswordExpires: {
      type: Sequelize.DATE,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = User
