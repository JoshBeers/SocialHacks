const express = require("express");
const Router = express.Router();
const mysqlConnectoin =require("../connection");

Router.get("/get", (req,res) =>{
    mysqlConnectoin.query("SELECT * from team", (err,rows,feilds)=>{
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }

    })
});


module .exports = Router;
