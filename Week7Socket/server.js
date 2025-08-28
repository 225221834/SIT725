const express = require("express");
const app = express();
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http); // Passing http server to socket.io
const PORT = 3000;

// Serve static files from the "public" directory
const path = require('path');
// Middleware to serve static files from 'public' directory 
app.use(express.static(path.join(__dirname, 'public')));

// Handle socket connections  
io.on('connection', (socket) => {
   // Log when a user connects   
   console.log('A user connected');

   // Listen for 'chat message' events from the client 
   socket.on('chat message', (msg) => {
      // Log the received message to the console 
      console.log('Message: ' + msg);

      // Broadcast message to all connected clients
      io.emit('chat message', msg); 
   });
   // Log when a user disconnects
   socket.on('disconnect', () => {
      // Log disconnection message to the console 
   console.log('A user disconnected');
   });
});
// Start the server and listen on the specified port: 3000
http.listen(PORT, () => { 
   console.log(`Server is running on http://localhost:${PORT}`);
})


