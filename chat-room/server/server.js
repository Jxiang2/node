const http = require("http");
const socketio = require("socket.io");
const app = require("./app");
const formatMessage = require("../utils/formatMessage");

const PORT = 3000 || process.env.PORT;
const BOT_NAME = "ChatCord Bot";

// create a server & add socket on it
const server = http.createServer(app);
const io = socketio(server);

// run when client connects emit/on(eventName, payload)
io.on("connection", (socket) => {
  // welcome current user
  socket.emit("message", formatMessage(BOT_NAME, "Welcome to ChatCord!"));

  // broadcast to others when a user connects
  socket.broadcast.emit("message", formatMessage(BOT_NAME, "A user has joined the chat"));

  // run when client disconnects
  socket.on("disconnect", () => {
    // send to all clients
    io.emit("message", formatMessage(BOT_NAME, "A user has left the chat"));
  });

  // listen for chatMessage, and send to every client
  socket.on("chatMessage", (msg) => {
    io.emit("message", formatMessage("USER", msg));
  });
});

// run server
server.listen(PORT, () => console.log("server running ..."));