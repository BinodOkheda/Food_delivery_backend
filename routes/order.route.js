const express = require('express');
const { placeOrder, getOrderById, updateOrderStatus } = require('../controllers/order.controller');

const orderRouter = express.Router();

orderRouter.post('/', placeOrder);
orderRouter.get('/:id', getOrderById);
orderRouter.patch('/:id', updateOrderStatus);

module.exports = orderRouter;
