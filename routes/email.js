const { Template } = require('ejs');
const express = require('express');
const router = express.Router();
const { showEmail } = require('../db/queries/contact');

router.post('/', (req, res) => {

  showEmail(req.session.user_id.id)
    .then((data) => {

      res.json(data);

    })
    .catch(err => console.log(err));

});

router.get('/', (req, res) => {

  let templateVar = {};


  // .then((result) => {
  //   templateVar["emails"] = result;
  //   if (req.session.user_id) {
  //     templateVar ['email'] = req.session.user_id.email;
  //   }

  //   res.render('email', templateVar);
  // })

})

router.post('/:adminId', (req, res) => {
  console.log(req.params.adminId);
  showEmail(req.params.adminId)
  .then((email) => {
    // console.log(email);
    const templateVar = { email }
    res.render('email', templateVar)
  })

})

module.exports = router;
