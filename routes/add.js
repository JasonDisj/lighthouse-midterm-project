const express = require('express');
const router = express.Router();
const { addListing } = require('../db/queries/new_listings');

router.use((req, res, next) => {
  const userCookie = req.session.user_id;
  if (userCookie && userCookie.is_admin) {
    return next()
  }
  res.status(403).send('Sorry, you must be an admin.');
})

router.post('/', (req, res) => {
  addListing(req.body, req.session.user_id.id)
    .then(game => {
      res.json({ game });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  res.redirect('/api/listing');
});

router.get('/', (req, res) => {
  res.render('add');
})

module.exports = router;
