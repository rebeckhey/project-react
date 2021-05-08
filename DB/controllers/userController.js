const router = require('express').Router()
const userModel = require ('../models/users/userModel')

router.post('/register', userModel.createUser)
router.post('/login', userModel.login )

module.exports = router