const express = require('express');
const { user } = require('pg/lib/defaults');
const router = express.Router();
const { myListings } = require('../db/queries/mylistings');

router.get('/', (req, res) => {

let templateVar = {};
  myListings(req.session.user_id.id)
  .then((result) => {
    templateVar["lists"] = result;
    if (req.session.user_id) {
      templateVar ['user'] = req.session.user_id;
    }

    res.render('myListings', templateVar);
  })

});


module.exports = router;
