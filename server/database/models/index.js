const User = require('./user')
const Account = require('./account')
const Balance = require('./balance')
const Transaction = require('./transaction')

User.hasMany(Account)
Account.belongsTo(User)

User.hasMany(Balance)
Balance.belongsTo(User)

User.hasMany(Transaction)
Transaction.belongsTo(User)

Account.hasMany(Balance)
Balance.belongsTo(Account)

Account.hasMany(Transaction)
Transaction.belongsTo(Account, { foreignKey: 'payTo' })
Transaction.belongsTo(Account, { foreignKey: 'payFrom' })



module.exports = {
  User,
  Account,
  Balance,
  Transaction,
}
