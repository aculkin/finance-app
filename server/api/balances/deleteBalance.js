const { Balance } = require('../../database/models')

const deleteBalance = async (req, res, next) => {
  try {
    const { balanceId } = req.params
    const balanceToDelete = await Balance.findByPk(balanceId)
    await balanceToDelete.destroy()
    res.status(200).send()
  } catch (error) {
    next(error)
  }
}

module.exports = deleteBalance
