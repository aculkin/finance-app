const { User } = require('../../database/models')
const { stripSensitiveInfoFromUser } = require('../utility')

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({
      where: {
        email: email.toLowerCase(),
      },
    })
    if (!user) {
      res
        .status(401)
        .send("Wrong email, if you don't have an account yet try signing up")
    } else if (user.correctPassword(password)) {
      req.login(user, (error) =>
        error
          ? next(error)
          : res.status(200).json(stripSensitiveInfoFromUser(user))
      )
    } else {
      res.status(401).send('Incorrect password')
    }
  } catch (error) {
    next(error)
  }
}

module.exports = login
