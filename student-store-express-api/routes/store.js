 const express = require('express');
 const Store = require('../models/Store');
 
 const router = express.Router();

 router.get('/', (req, res) => {
    res.status(200).json({products : Store.getProducts()})
 })

 module.exports = router;