const http = require("http");
const socketio = require("socket.io");

const sockets = require("./sockets");
const app = require("./expreeApp");

const PORT = 3000 || process.env.PORT;

// register express server
const server = http.createServer(app);
server.listen(PORT, () => console.log("server running ..."));

// register socketio
const io = socketio(server, { cors: { origin: "*" } });
sockets.listenChatRoom(io);
