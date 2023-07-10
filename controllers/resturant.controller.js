const Restaurant = require('../models/resturant.model');

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Get restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);
    res.status(200).json(restaurant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Get menu of a restaurant by ID
const getRestaurantMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);
    res.status(200).json(restaurant.menu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Add menu item to a restaurant
const addMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, image } = req.body;
    const restaurant = await Restaurant.findById(id);

    restaurant.menu.push({ name, description, price, image });
    await restaurant.save();

    res.status(201).json({ message: 'Menu item added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Delete menu item from a restaurant
const deleteMenuItem = async (req, res) => {
  try {
    const { id, itemId } = req.params;
    const restaurant = await Restaurant.findById(id);

    restaurant.menu.id(itemId).remove();
    await restaurant.save();

    res.status(202).json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = { getAllRestaurants, getRestaurantById, getRestaurantMenu, addMenuItem, deleteMenuItem };
