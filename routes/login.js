// const express = require('express');
// const router = express.Router();

// module.exports = (db) => {
//   router.get('/:user_id', (req, res) => {

//     const userId = req.params.user_id;
//     req.session.user_id = userId;

//     db.query(`
//   SELECT name
//   FROM users
//   WHERE id = $1`,
//       [userId])
//       .then(data => {
//         const username = data.rows[0];
//         req.session.username = username;
//         res.redirect('/')
//       })

//   });
//   return router;
// }
