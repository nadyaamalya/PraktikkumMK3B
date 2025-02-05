const express = require('express');
const router = express.Router();

// USER ROUTES
const userController = require('../controllers/users');
router.get('/users', userController.index);        // Get all users
router.get('/user/:id', userController.show);      // Get single user
router.post('/user', userController.store);        // Create user
router.put('/user/:id', userController.update);    // Update user
router.delete('/user/:id', userController.delete); // Delete user

// PRODUCT ROUTES
const productController = require('../controllers/products');
router.get('/products', productController.index);        // Get all products
router.get('/product/:id', productController.show);      // Get single product
router.post('/product', productController.store);        // Create product
router.put('/product/:id', productController.update);    // Update product
router.delete('/product/:id', productController.delete); // Delete product

// ORDER ROUTES
const orderController = require('../controllers/orders');
router.get('/orders', orderController.index);        // Get all orders
router.get('/order/:id', orderController.show);      // Get single order
router.post('/order', orderController.store);        // Create order
router.put('/order/:id', orderController.update);    // Update order
router.delete('/order/:id', orderController.delete); // Delete order

module.exports = router;
