const { Account } = require('../../database/models')

const editAccount = async (req, res, next) => {
  try {
    const { accountId } = req.params
    const { name, description, asset, interestRate } = req.body
    const accountToEdit = await Account.findByPk(accountId)
    const editedAccount = await accountToEdit.update({
      name,
      description,
      asset,
      interestRate,
    })
    res.status(201).json(editedAccount)
  } catch (error) {
    next(error)
  }
}

module.exports = editAccount
