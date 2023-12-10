///things we require
const express = require('express')
const Router = express.Router()

///require the controller
const indexCtrl = require('../controllers/index')


///routes

Router.get('/', indexCtrl.indexCtrl)