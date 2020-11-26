var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(process.cwd(), 'source')));
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
app.listen(port);