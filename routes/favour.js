const express = require('express');
const router = express.Router();
const { favouriteListing } = require('../db/queries/favourites');

router.post('/', (req, res) => {
  // console.log(req.query);
  // console.log(req.body);
  favouriteListing(req.body)
    .then(game => {
      res.json({ game });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

    // res.redirect('/');
});

router.get('/', (req, res) => {
  res.render('favourites');
})

module.exports = router;
