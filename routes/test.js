const express = require('express')
const router = express.Router()
const {test, test1} = require('../controllers/test')
require('dotenv').config()

router.post('/test', test)

router.post('/test1', test1)

module.exports = router