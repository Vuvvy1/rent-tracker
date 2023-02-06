const express = require('express');
const router = express.Router()

const propertyQueries = require('../db/queries/properties-queries')

router.get('/', (req, res) => {
  propertyQueries.getProperties()
    .then((properties) => {
      res.json(properties)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/:id', (req, res) => {
  propertyQueries.getPropertyById(req.params.id)
    .then((property) => {
      res.json(property)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
