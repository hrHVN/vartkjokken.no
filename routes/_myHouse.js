const express = require('express');
const Article = require('./../models/article');
const router = express.Router();

const heim_controller = require('../controllers/heimController.js')
const ;

// Default side
router.get('/', heim_controller.index);

router.post('/createNewDB', (req, res) => {
    NewDataBase()
})

module.exports = router;