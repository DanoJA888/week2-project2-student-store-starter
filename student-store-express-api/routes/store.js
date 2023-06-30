 const express = require('express');
 const Store = require('../models/store');
 const router = express.Router();

 router.get('/', (req, res) => {
    res.status(200).json({products : Store.getProducts()})
 });

 router.get("/:productId", (req,res) => {
    const { productId } = req.params;
    res.status(200).json({product: Store.getProductById(productId)})
});

 module.exports = router;