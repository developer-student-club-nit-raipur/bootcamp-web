var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  title: String,
  description: String,
  status: { type: Boolean, default: false },
  endDate: Date,
  updated: { type: Date, default: Date.now() }
});

let TaskModel = mongoose.model("TaskModel", taskSchema);

module.exports = TaskModel;
