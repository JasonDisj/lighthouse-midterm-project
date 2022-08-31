const express = require('express');
const router = express.Router();
const { showFav } = require('../db/queries/showFav');
const { favouriteListing } = require('../db/queries/favourites');


router.post('/', (req, res) => {
  // console.log(req.query);
favouriteListing(req.body.gameId, req.session.user_id.id)
 .then((game) => {
  console.log("gameid", req.body.gameId);
   return res.json(game);

 })


  // res.redirect('/');
});

router.get('/', (req, res) => {
  let templateVar = {};
  showFav(req.session.user_id.id)
  .then((result) => {
    templateVar["favs"] = result;
    res.render('favourites', templateVar);
  })

})

module.exports = router;
