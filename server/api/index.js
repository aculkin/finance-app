const express = require('express')
const router = express.Router()

router.use('/auth', require('./auth'))

router.use('/users', require('./users'))

router.use('/accounts', require('./accounts'))

router.use('/balances', require('./balances'))

router.use('/transactions', require('./transactions'))

module.exports = router
