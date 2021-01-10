const { Transaction } = require('../../database/models')

const deleteTransaction = async (req, res, next) => {
  try {
    const { transactionId } = req.params
    const transactionToDelete = await Transaction.findByPk(transactionId)
    await transactionToDelete.destroy()
    res.status(200).send()
  } catch (error) {
    next(error)
  }
}

module.exports = deleteTransaction
