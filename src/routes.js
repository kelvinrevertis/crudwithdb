const express = require('express')
const router = express()

const userControl = require('./controllers/userControl')

router.get('/usuarios', userControl.getAll)

module.exports = router