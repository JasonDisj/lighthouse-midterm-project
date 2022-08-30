const express = require('express');
const router = express.Router();
const { getUsers } = require('../db/queries/admin')

router.get('/:user_id', (req, res) => {

  getUsers(req.params.user_id)

  const userId = req.params.user_id;
  req.session.user_id = userId;
      .then(data => {
    const username = data.rows[0];
    req.session.username = username;
    res.redirect('/')
  })

});

module.exports = router;
