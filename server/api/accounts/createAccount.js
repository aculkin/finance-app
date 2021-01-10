const { Account } = require('../../database/models')

const createAccount = async (req, res, next) => {
  try {
    const { name, description, asset, interestRate } = req.body
    const newAccount = await Account.create({
      name,
      description,
      asset,
      interestRate,
    })
    res.status(201).json(newAccount)
  } catch (error) {
    next(error)
  }
}

module.exports = createAccount
