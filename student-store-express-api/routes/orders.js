const express = require('express');
const router = express.Router();
const Order = require('../models/order')

router.get('/', (req, res) => {
    res.status(200).json({orders : Order.getOrders()})
 });

 router.get("/:orderId", (req,res) => {
    const { orderId } = req.params;
    res.status(200).json({order: Order.getOrderById(orderId)})
});

module.exports = router;