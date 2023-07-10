const express = require('express');
const { getAllRestaurants, getRestaurantById, getRestaurantMenu, addMenuItem, deleteMenuItem } = require('../controllers/resturant.controller');

const resturantRouter = express.Router();

resturantRouter.get('/', getAllRestaurants);
resturantRouter.get('/:id', getRestaurantById);
resturantRouter.get('/:id/menu', getRestaurantMenu);
resturantRouter.post('/:id/menu', addMenuItem);
resturantRouter.delete('/:id/menu/:itemId', deleteMenuItem);

module.exports = resturantRouter;
