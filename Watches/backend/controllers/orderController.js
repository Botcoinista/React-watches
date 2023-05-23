//Import express,router, auth and orderModel
const router = require('express').Router()
const orderModel = require('../models/orderModel')
const auth = require('../authentication/auth')


//Create a new order, if user is logged in, send token
router.post('/', auth.verifyToken, orderModel.createNewOrder)


//Get all orders, if user is logged in, send token
router.get('/byid', auth.verifyToken, orderModel.getOrdersByUser)

//Get all orders from all users
router.get('/', auth.verifyToken, auth.checkAdmin, orderModel.getAllOrders)

//Update order
// router.put('/:id', orderModel.updateOrder)


//Delete order by id


//Export router
module.exports = router;