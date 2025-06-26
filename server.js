var express = require('express');
var app = express();

app.use('/colorcompass', express.static(__dirname))
app.listen(3000);
