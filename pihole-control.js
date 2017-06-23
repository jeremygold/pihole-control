const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var port = 9876;
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

