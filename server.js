const express = require("express")

var PORT = process.env.PORT || 8080;

var app = express();

//public directory in application
app.use(express.static( __dirname + "/public"));

//parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes
var routes = require("./controllers/burgers_controller");

app.use(routes);

//start server
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});