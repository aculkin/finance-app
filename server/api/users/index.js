const express = require('express')
const router = express.Router()

const dummy = (req, res, next) => res.status(200).send()

router.put('/', dummy)

module.exports = router
