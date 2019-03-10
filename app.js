`var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require("body-parser");
var session = require("express-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
require("dotenv").load();

// Conecting to mongodb

// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// const uri = "mongodb://bootcamp:BootCamp~@bootcamp-web-vnypo.mongodb.net/test?retryWrites=true";
// mongoose.connect(uri);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("SOrry unable to connect to the database");
//   client.close();
// });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(session({ secret: "SomeRandomSecretKey" }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.post("/home", function(req, res) {
  var name = req.body.name;
  var age = req.body.age;
  var contact = req.body.contact;

  var userData = {
    name: name,
    age: age,
    contact: contact
  };
  res.render("name", { data: userData });
});

app.get("/loop/data", (req, res) => {
  var users = [
    {
      name: "test 1",
      age: "17"
    },
    {
      name: "test 2",
      age: "20"
    },
    {
      name: "test 3",
      age: "15"
    }
  ];
  res.render("data", { users: users });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
`