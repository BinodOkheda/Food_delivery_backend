const Order = require('../models/order.model');

// Place a new order
const placeOrder = async (req, res) => {
  try {
    const { userId, restaurantId, items, totalPrice, deliveryAddress }= req.body;

    const order = new Order({
      user: userId,
      restaurant: restaurantId,
      items,
      totalPrice,
      deliveryAddress,
      status: 'placed',
    });
    await order.save();

    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Get order by ID
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id).populate('user').populate('restaurant');
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

// Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await Order.findByIdAndUpdate(id, { status });
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};

module.exports = { placeOrder, getOrderById, updateOrderStatus };
