const express = require('express');
const router = express.Router();
const { markAsSold } = require('../db/queries/sold');

router.post('/', (req, res) => {

  markAsSold(req.body.gameId, req.session.user_id.id)
    .then(() => {

      // res.json(data);

      res.send('Item updated to SOLD!');

    })
    .catch(err => console.log(err));

});

module.exports = router;
