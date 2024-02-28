const express = require('express');
const router = express.Router();

// authentication middleware

const authMiddleware = require('../middleware/authMiddleware');

//user controller 

const { register, login, checkUser } = require("../controller/userController");

// register routes

router.post('/register',register);

//login routes

router.post('/login',login);

//check route

router.get('/check',authMiddleware, checkUser);

module.exports = router;


