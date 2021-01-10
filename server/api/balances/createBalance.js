const { Balance } = require('../../database/models')

const createBalance = async (req, res, next) => {
  try {
    const { amount, date } = req.body
    const newBalance = await Balance.create({
      amount,
      date,
    })
    res.status(201).json(newBalance)
  } catch (error) {
    next(error)
  }
}

module.exports = createBalance
