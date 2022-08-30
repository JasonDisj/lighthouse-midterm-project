const express = require('express');
const router = express.Router();
const { getFilteredListings } = require('../db/queries/filter');

router.get('/', (req, res) => {
  // console.log('req.query', req.query);
  getFilteredListings(req.query)
    .then(games => {
      res.json({ games });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
