const { stripSensitiveInfoFromUser } = require('../utility')

const me = async (req, res, next) => {
  try {
    res.json(stripSensitiveInfoFromUser(req.user))
  } catch (error) {
    next(error)
  }
}

module.exports = me
