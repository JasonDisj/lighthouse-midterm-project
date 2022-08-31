const express = require('express');
const router = express.Router();
const { deleteListing } = require('../db/queries/delete');

router.post('/', (req, res) => {
  // console.log(req.query);
  deleteListing(req.body.gameId, req.session.user_id.id)
    .then((data) => {

      res.json(data);

    })
    .catch(err => console.log(err));

});

module.exports = router;
