var express = require('express');
var app = express();
var mysql = require('mysql')

app.set('view engine', 'ejs');

app.get('/', function (request, res) {
    res.render('pages/index');

});

app.get('/students', function (req, res) {
    var connection = mysql.createConnection({
        host     : 'www.db4free.net',
        user     : 's140390',
        password : 'abc123**',
        database : 'db140390'
    });
    connection.connect()
    connection.query('SELECT * FROM students', function (err, rows, fields) {
        if (err) throw err
        res.render('pages/students',{students:rows});

    });
});

app.get('/subjects', function (req, res) {
    var connection = mysql.createConnection({
        host     : 'www.db4free.net',
        user     : 's140390',
        password : 'abc123**',
        database : 'db140390'
    });
    connection.connect()
    connection.query('SELECT * FROM subjects', function (err, rows, fields) {
        if (err) throw err
        res.render('pages/subjects',{subjects:rows});

    });
});


app.listen(8080);