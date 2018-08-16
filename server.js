var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT ||  3000

app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(bodyParser.json());
// app.use(express.static('app/public'))

// app.get("/", function(req, res) {
//     // console.log(path.join(__dirname, "/app/public/home"));
//     res.sendFile(path.join(__dirname, "/app/public/home.html"));
// });


 require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});