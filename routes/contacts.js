// Import the 'express' module to create a router
const express = require('express');
const router = express.Router();

// Import the 'contactsController' module, which contains functions for handling contact-related routes
const contactsController = require('../controllers/contacts');

// Define a route to get all contacts
router.get('/', contactsController.getAll);

// Define a route to get a single contact by ID
router.get('/:id', contactsController.getSingle);

// Export the router to be used in other modules
module.exports = router;