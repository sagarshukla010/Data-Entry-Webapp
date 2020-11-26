var express = require('express');
var bodyParser = require('body-parser')

const {BASEPATH,PORT} = require('./config/config.json')

var app  = express();
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

var messages = [
  {name: 'Tim', message: 'Hi'},
  {name: 'Jane', message: 'Hello'}
]

app.get(BASEPATH,(req, res)=>{
    res.sendFile(__dirname + '/html/server.html');
  });

  app.post(BASEPATH,(req,res)=>{
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200);
  })

  io.on('connection', (socket) => {
    console.log('a user connected')
})

var server = http.listen(PORT,() =>{

    console.log("The server is listening on port",server.address().port)
});