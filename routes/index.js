var express = require('express');
var router = express.Router();
var helpers = require('../helpers/jwt');

/* GET home page. */
router.get('/', function(req, res, next) {
  var token = helpers.createToken({ some : "some"});
  console.log(token);
  console.log(helpers.verifyToken(token));
  res.render('index', { title: 'Express' });
});

module.exports = router;
