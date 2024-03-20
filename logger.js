var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "#170GAB@3!2#ABCDmiguel!#@",
    database: "cardgame"
});

var username = '';
var password = '';
var email = '';



con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");

    function login(username, password) {
        if (err) throw err;
        con.query("SELECT * FROM cardgame.player WHERE username = '" + username + "'", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
        con.query("SELECT * FROM cardgame.player WHERE password = '" + password + "'", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });

    }




});




