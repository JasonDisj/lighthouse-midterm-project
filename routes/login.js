const express = require('express');
const router = express.Router();
const { getUsers } = require('../db/queries/admin')

router.get('/:user_id', (req, res) => {
  getUsers(req.params.user_id)
    .then(resultData => {
      console.log(resultData);
      req.session.user_id = { id: resultData.id, is_admin: resultData.is_admin };
      res.redirect('/')
    })


});

module.exports = router;
