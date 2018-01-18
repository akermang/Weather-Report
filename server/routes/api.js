const express = require('express');

const router = express.Router();

/**
 * Mock data
 */
const mockData = require('../mock/data.json');

/**
 * Api routes
 */
router.get('/', (req, res) => {
  setTimeout(() => {
    res.send({ statusCode: 200, data: mockData });
  }, 1000);
});

module.exports = router;
