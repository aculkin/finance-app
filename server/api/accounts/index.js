const express = require('express')
const router = express.Router()

const createAccount = require('./createAccount')
const editAccount = require('./editAccount')
const deleteAccount = require('./deleteAccount')
const { isLoggedIn } = require('../utility')

router.post('/', isLoggedIn, createAccount)

router.put('/:accountId', isLoggedIn, editAccount)

router.delete('/:accountId', isLoggedIn, deleteAccount)

module.exports = router
