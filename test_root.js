var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'docs');
app.use('/', express.static(public));
app.listen(8080); 