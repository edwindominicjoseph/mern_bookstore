const express = require('express');
const { createAOrder } = require('./order.controller');
const router = express.Router();


// Route to create a new order
router.post('/', createAOrder);

module.exports = router;
// This code sets up an Express router for handling order-related routes.