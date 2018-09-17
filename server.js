var express = require('express');
var app = express();


app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    response.render('pages/index');

});

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123',
  database : 'my_db'
});

app.listen(2222);