const EventEmitter = require("events");
const celebrity = new EventEmitter();

// subscribe1 to celebrity for observer1
celebrity.on("race", (result) => {
	if (result === "win") console.log("Congrats!");
});

// subscribe2 to celebrity for observer1
celebrity.on("race", (result) => {
	if (result === "loss") console.log("Oh sh*t!");
});

// subscribe to celebrity for observer2
celebrity.on("race", (result) => {
	if (result === "win") console.log("I could have win!");
});

// subscribe2 to celebrity for observer2
celebrity.on("race", (result) => {
	if (result === "loss") console.log("Nice!");
});

// emit events
celebrity.emit("race", "win");

// trigger when no more code to excute
process.on("exit", (code) => {
	console.log("Process exit with code: ", code);
});
