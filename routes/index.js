///things we require
const express = require('express')
const router = express.Router()

///require the controller
const indexCtrl = require('../controllers/index')


///routes

router.get('/', indexCtrl.index_get)

module.exports = router;