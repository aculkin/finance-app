const express = require('express')
const router = express.Router()

const createBalance = require('./createBalance')
const editBalance = require('./editBalance')
const deleteBalance = require('./deleteBalance')
const { isLoggedIn } = require('../utility')

router.post('/', isLoggedIn, createBalance)

router.put('/:balanceId', isLoggedIn, editBalance)

router.delete('/:balanceId', isLoggedIn, deleteBalance)

module.exports = router