const express = require('express');
const router = express.Router();
const { addListing } = require('../db/queries/new_listings');

router.post('/', (req, res) => {
  // console.log(req.query);
  // console.log(req.body);
  addListing(req.body)
    .then(game => {
      res.json({ game });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

    res.redirect('/');
});

router.get('/', (req, res) => {
  res.render('add');
})

module.exports = router;
