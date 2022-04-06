const formatMessage = require("../utils/formatMessage");
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require("../utils/userDB");

const BOT_NAME = "ChatCord Bot";

// run when client connects emit/on(eventName, payload)
function listenChatRoom (io) {
  const multiChatNameSpace = io.of("/multichat");
  const singleChatNameSpace = io.of("/chat");

  singleChatNameSpace.on("connection", socket => {
    console.log("single chat socket");
    socket.on("test", () => console.log("test"));
  });

  multiChatNameSpace.on("connection", socket => {
    // user join room
    socket.on("joinRoom", ({ username, room }) => {
      const user = userJoin(socket.id, username, room);
      // the new joined user's socket joins a room 
      // or create one if it's the first client
      socket.join(user.room);

      // welcome current user
      socket.emit("message", formatMessage(BOT_NAME, "Welcome to ChatCord!"));

      // broadcast to others when a user connects
      socket.broadcast.to(user.room).emit("message", formatMessage(BOT_NAME, `${username} has joined the chat`));

      // sender users and room info to all clients
      multiChatNameSpace.to(user.room).emit("roomUsersInfo", {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    });

    // listen for chatMessage, and send to every client
    socket.on("chatMessage", (msg) => {
      const user = getCurrentUser(socket.id);
      io.to(user.room).emit("message", formatMessage(user.username, msg));
    });

    // run when client disconnects
    socket.on("disconnect", () => {
      const user = userLeave(socket.id);

      if (user) {
        // send to all clients
        multiChatNameSpace.to(user.room).emit(
          "message",
          formatMessage(BOT_NAME, `${user.username} has left the chat`)
        );

        // sender users and room info to all clients
        multiChatNameSpace.to(user.room).emit("roomUsersInfo", {
          room: user.room,
          users: getRoomUsers(user.room)
        });
      }
    });
  });
}

module.exports = { listenChatRoom };