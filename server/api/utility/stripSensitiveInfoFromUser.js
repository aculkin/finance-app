const stripSensitiveInfoFromUser = (user) => {
  if (user) {
    const {
      password,
      salt,
      stripeCustomerId,
      resetPasswordToken,
      resetPasswordExpires,
      ...safeFields
    } = user.dataValues || user
    return safeFields
  } else {
    return null
  }
}

module.exports = stripSensitiveInfoFromUser
