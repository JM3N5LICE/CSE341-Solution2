// Import the 'mongodb' module for database connection
const mongodb = require('../db/connect');

// Import the 'ObjectId' class from the 'mongodb' library
const ObjectId = require('mongodb').ObjectId;

// Function to get all contacts from the database
const getAll = async (req, res, next) => {
  // Use the 'find' method to get all documents from the 'contacts' collection
  const result = await mongodb.getDb().db().collection('contacts').find();

  // Convert the result to an array and send it as a JSON response
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

// Function to get a single contact by ID from the database
const getSingle = async (req, res, next) => {
  // Create an ObjectId from the request parameter 'id'
  const userId = new ObjectId(req.params.id);

  // Use the 'find' method to get a document with the specified ID from the 'contacts' collection
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });

  // Convert the result to an array and send the first element as a JSON response
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

// Export the functions to be used in other modules
module.exports = { getAll, getSingle };
