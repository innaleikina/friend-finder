var path = require("path");
var bodyParser = require("body-parser");
var express = require("express");


module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(express.static('app/public'))
   
   
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    })

       
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"))
    })


    


}