const User = require('./user')
const Account = require('./account')
const Balance = require('./balance')
const Transaction = require('./transaction')

User.hasMany(Account)
Account.belongsTo(User)

Account.hasMany(Balance)
Balance.belongsTo(Account)

Account.hasMany(Transaction)
Transaction.belongsTo(Account, { foreignKey: 'payTo' })
Transaction.belongsTo(Account, { foreignKey: 'payFrom' })

User.hasMany(Transaction)
Transaction.belongsTo(User)

module.exports = {
  User,
  Account,
  Balance,
  Transaction,
}
