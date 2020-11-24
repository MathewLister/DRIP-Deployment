var mysql = require('mysql')
var con

exports.connect = function ConnectionHandler(done){
    con = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    });
    done();
}

exports.get = function GetHandler(){
    return con;
}
