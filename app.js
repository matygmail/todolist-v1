//jshint esversion:6

const express = require ("express");
const bodyParser = require("body-parser");

const app = express();
global.tasks = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req,res){
  tasks.push(req.body.newItem);
  res.redirect("/");


})
app.get("/", function(req, res){
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/*  if (currentDay === 6 || currentDay === 0)
  {
    day = "weekend";
  }
  else {
    day = "weekday"
  }*/
  day = days[currentDay];
  res.render("list", {kindOfDay: day, tasksToPresent: tasks});
})

app.listen(3000, function(){
  console.log("server started on port 3000");
});
