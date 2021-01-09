const { Transaction } = require('../../database/models')

const createTransaction = async (req, res, next) => {
  try {
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
    const newTransaction = await Transaction.create({
      name,
      description,
      amount,
      frequency,
      category,
      startDate,
      payTo,
      payFrom,
    })
    res.status(201).json(newTransaction)
  } catch (error) {
    next(error)
  }
}

module.exports = createTransaction
