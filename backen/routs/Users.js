const express = require("express");
const Router = express.Router();
const mysqlConnectoin =require("../connection");

Router.get("/get", (req,res) =>{
    mysqlConnectoin.query("SELECT * from Users", (err,rows,feilds)=>{
        console.log("get user")
        if(!err) {
           // console.log(rows);
            res.send(rows);

        }
        else {
            console.log(err);
        }

    })
});

module.exports= Router;
