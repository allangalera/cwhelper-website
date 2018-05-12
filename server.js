var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function (req, res) {
    res.sendFile('index.html');
});

app.get('*', function (req, res) {
    res.redirect('/');
});

app.listen(8081, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:8081/');
});
