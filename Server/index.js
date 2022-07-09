import express from "express";
import cors from 'cors';
import { createServer } from 'http';
import { Server } from "socket.io";

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
const io = new Server(httpServer, { cors: { origin: '*' } });

//Inputs from Console when starting the server
let consoleInputs = minimist(process.argv.slice(2));
const port = consoleInputs.PORT || 8080;

//MIDDLEWARES

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(cors())

//SOCKET.IO
io.on('connection', socket => {
  console.log("a user connected");
  socket.emit('request', /* … */); // emit an event to the socket
  io.emit('broadcast', /* … */); // emit an event to all connected sockets
  socket.on('reply', () => { /* … */ }); // listen to the event
});

//ROUTERS
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/messages", messagesRouter);
app.use("/cart", cartRouter);
app.use("/orders", ordersRouter);

app.get("/", (req, res) => {
  res.send("HOME");
});

const server = httpServer.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

server.on('error', (err) => console.log('Express Server Error: ' + err) )