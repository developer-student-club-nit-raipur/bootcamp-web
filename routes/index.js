var express = require('express');
var router = express.Router();
var Task = require("../models/Task");

/* GET home page. */
router.get('/', function(req, res, next) {
  var taskMap = [];
  Task.find({}, function(err, tasks) {
    tasks.forEach(function(task) {
      taskMap.push(task);
    });
    res.render('index', { tasks: taskMap });
  });
});

module.exports = router;
