const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");

// client connects
const socket = io();

// message from server ...
socket.on("message", message => {
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
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

