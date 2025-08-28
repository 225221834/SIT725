const express = require("express");
const app = express();
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http); // Passing http server to socket.io
const PORT = 3000;

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
   console.log('a user connected');
   socket.on('disconnect', () => {
   console.log('user disconnected');
});

 // generates a random number every second
setInterval(() => {
    const randomNum = Math.floor(Math.random() * 100);
    socket.emit('number', randomNum);
  }, 1000);
});

http.listen(PORT, () => { 
   console.log(`Server is running on http://localhost:${PORT}`);
})


