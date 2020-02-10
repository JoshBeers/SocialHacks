var express = require('express');
var app =new express();
var bodyParser = require("body-parser");

const  usersRoute= require("./routs/Users");
const hacksRoute= require("./routs/Hacks");
const teamsRoute = require("./routs/Teams");


const msqlConnection = require("./connection");

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/user',usersRoute);
app.use('/hacks',hacksRoute);
app.use('/teams', teamsRoute);

app.listen(63145);
