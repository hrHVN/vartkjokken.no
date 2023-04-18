const express = require('express');
const Article = require('./../models/article');
const router = express.Router();

const heim_controller = require('../controllers/heimController.js')

// Default side
router.get('/', heim_controller.index)

module.exports = router;