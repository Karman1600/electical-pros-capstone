const { createServer } = require("http");
const { Server } = require("socket.io");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  const io = new Server(server);

  io.on("connection", (socket) => {
    console.log("user connected 1");
    
    socket.on("create-room", (roomId) => {
      socket.join(roomId);
      console.log(`Room created with ID: ${roomId}`);
    });

    socket.on("join-room", (roomId) => {
      socket.join(roomId);
      socket.to(roomId).emit("user-joined", socket.id);
    });

    socket.on("offer", (roomId, offer) => {
      socket.to(roomId).emit("offer", offer);
    });

    socket.on("answer", (roomId, answer) => {
      socket.to(roomId).emit("answer", answer);
    });

    socket.on("candidate", (roomId, candidate) => {
      socket.to(roomId).emit("candidate", candidate);
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
