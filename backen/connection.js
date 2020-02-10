const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'apiUser',
    password: 'Jb200233367',
    database: 'hacks',
    mulitStatement : true
});

mysqlConnection.connect((err)=>{

    if(!err){
        console.log("connected")
    }else {
        console.log(err);
    }
})

module .exports = mysqlConnection;
