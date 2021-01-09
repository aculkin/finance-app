const express = require('express')
const router = express.Router()

const createTransaction = require('./createTransaction')
const editTransaction = require('./editTransaction')
const deleteTransaction = require('./deleteTransaction')
const { isLoggedIn } = require('../utility')

router.post('/', isLoggedIn, createTransaction)

router.put('/:transactionId', isLoggedIn, editTransaction)

router.delete('/:transactionId', isLoggedIn, deleteTransaction)

module.exports = router
