const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();



const userRoutes = require('./routes/user.route');
const restaurantRoutes = require('./routes/resturant.route');
const orderRoutes = require('./routes/order.route');


const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);



app.listen(3000,async () => {

    try {

        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("connnected to DB")
        
    } catch (error) {
        
        console.log(error)

    }

    console.log('Server is running on port 3000');
  });