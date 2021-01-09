const express = require('express')
const router = express.Router()

const login = require('./login')
const signup = require('./signup')
const logout = require('./logout')
const me = require('./me')

router.post('/login', login)

router.post('/signup', signup)

router.post('/logout', logout)

router.get('/me', me)

module.exports = router
