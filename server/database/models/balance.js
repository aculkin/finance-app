const Sequelize = require('sequelize')
const db = require('../database')

const Balance = db.define(
  'balance',
  {
    amount: {
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATEONLY,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = Balance
