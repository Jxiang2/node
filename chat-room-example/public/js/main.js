const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");

// get username & room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

// client connects
const socket = io("/multichat");
const socket2 = io("/chat");

// join chatRoom
socket.emit("joinRoom", { username, room });
socket2.emit("test");

// message from server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);

  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// get room and users
socket.on("roomUsersInfo", ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// message submit to server
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // access the value msg text
  const msg = e.target.elements.msg.value;

  // emit a chatMessage to server
  socket.emit("chatMessage", msg);

  // clear input
  e.target.msg.value = "";
  e.target.msg.focus();
});

// output message to DOM
const outputMessage = (message) => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("message");
  newDiv.innerHTML = `
    <p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
      ${message.text}
    </p>
  `;
  document.querySelector(".chat-messages").appendChild(newDiv);
};

// add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// add users to DOM
function outputUsers(users) {
  userList.innerHTML = `
    ${users.map((user) => `<li>${user.username}</li>`).join("")}
  `;
}
