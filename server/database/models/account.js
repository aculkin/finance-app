const Sequelize = require('sequelize')
const db = require('../database')

const Account = db.define(
  'account',
  {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    asset: {
      type: Sequelize.BOOLEAN,
    },
    interestRate: {
      type: Sequelize.DECIMAL,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = Account
