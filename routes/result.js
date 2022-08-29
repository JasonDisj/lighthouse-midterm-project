const express = require('express');
const router  = express.Router();
const filteredQueries = require('../db/queries/filter');

router.get('/', (req, res) => {
  filteredQueries.getFilteredListings()
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
