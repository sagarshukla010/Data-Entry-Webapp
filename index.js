const express = require('express');

var app  = express();

var server = app.listen(3000,() =>{

    console.log("The server is listening on port",server.address().port)
});