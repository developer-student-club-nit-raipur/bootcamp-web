var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/abcd', function(req, res, next) {
  res.render('index', { title: 'sadfsdgfgfgdfgdfgdfz' });
});

module.exports = router;
