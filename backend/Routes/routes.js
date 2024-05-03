// routes.js

const express = require('express');
const authControl = require('../AuthControl/AuthenticationCodes');
const mongoose = require('mongoose');


const router = express.Router();

router.post('/signup', authControl.signup);
router.post('/login', authControl.login);
router.post('/logout', authControl.logout);

router.get('/foods', async (req, res) => {
    try {
      // Access the 'Dynamic-data' collection in the MongoDB database
      const dynamicDataCollection = mongoose.connection.db.collection('MainData');
  
      // Fetch all documents from the 'Dynamic-data' collection
      const foods = await dynamicDataCollection.find({}).toArray();
  
      // Send the food data as a response
      res.json(foods);
    } catch (error) {
      console.error('Error fetching food data:', error.message);
      res.status(500).json({ error: 'Error fetching food data' });
    }
  });

module.exports = router;
