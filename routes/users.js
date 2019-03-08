var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/form', function(req, res, next) {
  res.render('form');
});

//POST Methods for getting form data
// router.post('/formpost', function(req, res){
//   var name = req.body.name;
//   var age = req.body.age;
//   var contact = req.body.contact;
  
//   var userData = {
//     name : name,
//     age : age,
//     contact : contact
//   };
//   console.log(userData);
//   res.render('data', { user : userData });
// });

router.get('/:name', (req, res) => {
  var name = req.params.name;
  console.log(name);
  res.render('name', { name : name });
});

router.get('/loop/data', (req, res) => {
  var users = [
    {
      name : "test 1",
      age : "18"
    },
    {
      name : "test 2",
      age : "20"
    },
    {
      name : "test 3",
      age : "18"
    },
  ];
  res.render('data', { users : users });
});

module.exports = router;
