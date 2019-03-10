var express = require("express");
var router = express.Router();
var Task = require("../models/Task");

router.post('/add', function(req, res, next) {
  let title = req.body.title;
  let description = req.body.description;
  let endDate = req.body.enddate;
  const taskData = new Task({
    title: title,
    description: description,
    endDate: endDate
  });
  taskData.save(function (err) {
    if (err) return handleError(err);
    console.log("Model Saved");
  });
  res.redirect("/");
});

router.get('/add', function(req, res, next) {
  res.render("addTask");
});

router.get('/edit/:id', function(req, res){
  let id = req.params.id;
  Task.find({_id: id}, function(err, task){
    console.log(task);
    res.render("editTask", task[0]);
  });
});

router.post('/edit/:id', function(req, res){
  let id = req.params.id;
  let title = req.body.title;
  let description = req.body.description;
  let endDate = req.body.enddate;
  Task.findOne({_id: id}, function(err, task){
    console.log(task);
    task.title = title;
    task.description = description;
    task.endDate = endDate;
    task.save();
    res.redirect("/");
  });
});

router.get('/approve/:id', function(req, res){
  let id = req.params.id;
  Task.findOne({_id: id}, function(err, task){
    console.log(task);
    task.status = true;
    task.save();
    res.redirect("/");
  });
});

router.get('/disapprove/:id', function(req, res){
  let id = req.params.id;
  Task.findOne({_id: id}, function(err, task){
    console.log(task);
    task.status = false;
    task.save();
    res.redirect("/");
  });
});

module.exports = router;
