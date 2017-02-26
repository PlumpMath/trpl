var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var port = (process.env.PORT || '8011');

app.listen(port, function () {
  console.log('ok! On localhost:' + port);
});