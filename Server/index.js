import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

//ROUTERS
import usersRouter from "./router/users.js";
import productsRouter from "./router/products.js";
import messagesRouter from "./router/messages.js";
import ordersRouter from "./router/orders.js";
import cartRouter from "./router/cart.js";
//Libraries
import minimist from "minimist";
import bodyParser from "body-parser";

//SERVER CONFIG WITH SOCKET.IO

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

//Inputs from Console when starting the server

// DISABLED FOR HEROKU DEPLOY
// let consoleInputs = minimist(process.argv.slice(2));

const port = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//MIDDLEWARES

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(cors());

//SOCKET.IO

let chatUsers = [];
const addUser = (user, socketID) => {
  const findUser = chatUsers.map((chatUser) => chatUser._id).indexOf(user._id);
  if (findUser === -1) {
    user.socket = socketID;
    chatUsers.push(user);
  }
};
const removeUser =(socketID) => {
 const updatedUsers = chatUsers.filter(user => user.socket !== socketID);
 chatUsers = updatedUsers
}

io.on("connection", (socket) => {
  console.log("a user connected socket #" + " " + socket.id);
  socket.on("addUser", (user) => {
    console.log("received new user")
    addUser(user, socket.id);
    io.emit("newUserConnected", chatUsers)
  });
  ; // emit an event to all connected sockets
  socket.emit("request" /* … */); // emit an event to the socket
  socket.on("reply", () => {
    /* … */
  }); // listen to the event
  socket.on("disconnect", () => {
    console.log("user disconnected");
    removeUser(socket.id)
    io.emit("newUserConnected", chatUsers)
  });
  socket.on("logout", () => {
    socket.disconnect();
    removeUser(socket.id)
    io.emit("newUserConnected", chatUsers)
  })
  socket.on("user_message", (newMessage) => {
    io.emit("new_message", newMessage); // emit an event to all connected sockets
  });
});

//ROUTERS
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/cart", cartRouter);
app.use("/api/orders", ordersRouter);

// FOR HEROKU
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

const server = httpServer.listen(port, () => {
  console.log(`Eshop app listening on port ${port}`);
});

server.on("error", (err) => console.log("Express Server Error: " + err));
