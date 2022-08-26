const express = require('express')
const router = express.Router()

const userControl = require('./controllers/userControl')

router.get('/usuarios', userControl.getAll)
router.get('/usuario/:id', userControl.getOne)
router.post('/usuario', userControl.addUser)
router.put('/usuario/:id', userControl.editUser)
router.delete('/usuario/:id', userControl.deleteUser)


module.exports = router