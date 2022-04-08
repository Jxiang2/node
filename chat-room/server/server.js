const http = require("http");
const socketio = require("socket.io");

const sockets = require("./sockets");
const app = require("./expreeApp");

const PORT = 3000 || process.env.PORT;

// create a server & add socket on it
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: "*" } });

// run server
server.listen(PORT, () => console.log("server running ..."));
sockets.listenChatRoom(io);