const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle data from the client
    socket.on('data', (data) => {
        console.log('Received data:', data);
        // You can process and store the data as needed
    });

    // Disconnect event
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
