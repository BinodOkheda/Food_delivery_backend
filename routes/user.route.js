const express = require('express');
const { registerUser, loginUser, resetPassword } = require('../controllers/user.controller');

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.patch('/:id/reset', resetPassword);

module.exports = userRouter;
