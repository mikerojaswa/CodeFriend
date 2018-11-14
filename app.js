const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// Use the static content located inside public folder.
app.use(express.static(__dirname + '/public'));

// Create socket
io.on('connection', function(socket) {
  socket.on('textEdit', function(data) {
    socket.broadcast.emit('textEdit', data);
    console.log('Event broadcasted', data);
  });
});

// Listen on port 3000.
http.listen(3000, function () {
  console.log('Port 3000!');
});
