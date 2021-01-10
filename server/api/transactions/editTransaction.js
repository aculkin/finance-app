const { Transaction } = require('../../database/models')

const editTransaction = async (req, res, next) => {
  try {
    const { transactionId } = req.params
    const {
      name,
      description,
      amount,
      frequency,
      category,
      startDate,
      payTo,
      payFrom,
    } = req.body
    const transactionToEdit = await Transaction.findByPk(transactionId)
    const editedTransaction = await transactionToEdit.update({
      name,
      description,
      amount,
      frequency,
      category,
      startDate,
      payTo,
      payFrom,
    })
    res.status(201).json(editedTransaction)
  } catch (error) {
    next(error)
  }
}

module.exports = editTransaction
