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
  password : 'abc123**',
  database : 'db140390'
});

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()

app.listen(2222);