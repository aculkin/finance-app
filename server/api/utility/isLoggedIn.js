const isLoggedIn = (req, res, next) => {
  try {
    if (req?.user?.id) {
      next()
    } else {
      const notLoggedIn = new Error('Not logged in')
      notLoggedIn.status = 401
      throw notLoggedIn
    }
  } catch (error) {
    next(error)
  }
}

module.exports = isLoggedIn
