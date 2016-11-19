var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

console.log("Listening on port 3000");
server.listen(3000);

app.use(express.static('public'));

/*
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
*/

io.on('connection', function (socket) {
  socket.emit('from_server', { hello: 'from server' });
  socket.on('from_browser', function (data) {
    console.log("Message from browser: ", data);
  });
});