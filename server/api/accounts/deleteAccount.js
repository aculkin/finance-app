const { Account } = require('../../database/models')

const deleteAccount = async (req, res, next) => {
  try {
    const { accountId } = req.params
    const accountToDelete = await Account.findByPk(accountId)
    await accountToDelete.destroy()
    res.status(200).send()
  } catch (error) {
    next(error)
  }
}

module.exports = deleteAccount
