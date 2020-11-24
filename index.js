const { static } = require('express');
var express = require('express');

var app  = express();

//app.use('/static',express.static(__dirname + '/public/server.html'))

app.get('/static',(req, res)=>{
    res.sendFile(__dirname + '/public/server.html');
  });


var server = app.listen(3000,() =>{

    console.log("The server is listening on port",server.address().port)
});