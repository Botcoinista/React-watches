//Require express and cors and initialize app
const express = require('express');
const app = express();
const cors = require('cors');


//Middlewear
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Controllers
app.use('/watch/products', require('./controllers/productController'));
app.use('/watch/users', require('./controllers/userController'));
app.use('/watch/orders', require('./controllers/orderController'));


//Export app
module.exports = app;


