const Sequelize = require('sequelize')
const db = require('../database')

const Transaction = db.define(
  'transaction',
  {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    frequency: {
      type: Sequelize.ENUM(
        'Single',
        'Yearly',
        'Quarterly',
        'Monthly',
        'Bi-weekly',
        'Weekly',
        'Daily'
      ),
    },
    category: {
      type: Sequelize.STRING,
    },
    startDate: {
      type: Sequelize.DATEONLY,
    },
    payTo: {
      type: Sequelize.INTEGER,
    },
    payFrom: {
      type: Sequelize.INTEGER,
    },
  },
  {
    paranoid: true,
  }
)

module.exports = Transaction
