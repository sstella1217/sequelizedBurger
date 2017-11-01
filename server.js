var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
var burger = require("./models/burger.js");

app.use("/api", routes);
//app.use("/burgers", routes);
//app.use("/create", routes);

// listen on port 3000
var port = process.env.PORT || 3000;

app.listen(port,function(
	
	){
	console.log("Port is connected on " + port)
});
