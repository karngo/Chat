var express = require("express");
var socket = require("socket.io");

// App setup
var app = express();
var server = app.listen(4000, () => {
  console.log("Listening to requests on port 4000");
});

// Static files
app.use(express.static("public"));

// Setup socket
var io = socket(server);

io.on("connection", (socket) => {
  console.log("Socket connected successfully", socket.id);

  socket.on("chat", (data) => {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});
