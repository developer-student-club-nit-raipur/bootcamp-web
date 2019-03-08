var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/form', function(req, res, next) {
  res.render('form');
});

//POST Methods for getting form data
router.post('/formpost', function(req, res){
  var name = req.body.name;
  var age = req.body.age;
  var contact = req.body.contact;
  
  var userData = {
    name : name,
    age : age,
    contact : contact
  };
  console.log(userData);
  res.render('index');
});

router.get('/:name', (req, res) => {
  var name = req.params.name;
  console.log(name);
  res.render('index');
});

module.exports = router;
