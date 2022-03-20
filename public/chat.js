const socket = io.connect("http://localhost:4000");

const message = document.querySelector(".message");
const handle = document.querySelector(".handle");
const button = document.querySelector(".send");
const output = document.querySelector(".output");
const feedback = document.querySelector(".feedback");

// Emit events

button.addEventListener("click", () => {
  socket.emit("chat", {
    handle: handle.value,
    message: message.value,
  });
});

message.addEventListener("keypress", () => {
  socket.emit("typing", handle.value);
});

// Listen for events

socket.on("chat", (data) => {
  feedback.innerHTML = "";
  output.innerHTML += `<p><strong>${data.handle}</strong> :${data.message}</p>`;
});

socket.on("typing", (data) => {
  feedback.innerHTML = `<p>${data} is typing a message...</p>`;
});
