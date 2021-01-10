const { User } = require('../../database/models')
const { stripSensitiveInfoFromUser } = require('../utility')

const signup = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
    })
    if (user) {
      req.login(user, (error) =>
        error ? next(error) : res.json(stripSensitiveInfoFromUser(user))
      )
    } else {
      const unknownSignupError = new Error('Unable to sign up')
      unknownSignupError.status = 500
      throw unknownSignupError
    }
  } catch (error) {
    next(error)
  }
}

module.exports = signup
