const { Balance } = require('../../database/models')

const editBalance = async (req, res, next) => {
  try {
    const { balanceId } = req.params
    const { date, amount } = req.body
    const balanceToEdit = await Balance.findByPk(balanceId)
    const editedBalance = await balanceToEdit.update({
      date,
      amount,
    })
    res.status(201).json(editedBalance)
  } catch (error) {
    next(error)
  }
}

module.exports = editBalance
