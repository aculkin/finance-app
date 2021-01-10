require('dotenv').config()
const Sequelize = require('sequelize')

const productionDialectOptions = {
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
}

const dialectOptions = !!process.env.DATABASE_URL
  ? productionDialectOptions
  : null

const databaseUrl =
  process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/finance-app'

const db = new Sequelize(databaseUrl, {
  logging: false,
  dialect: 'postgres',
  dialectOptions,
})

module.exports = db
