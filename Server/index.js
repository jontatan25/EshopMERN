import express from "express";
import cors from 'cors';
import { createServer } from 'http';
import { Server } from "socket.io";
import { fileURLToPath } from 'url';
import path,{ dirname }  from 'path';


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

// DISABLED FOR HEROKU DEPLOY
// let consoleInputs = minimist(process.argv.slice(2));

const port = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//MIDDLEWARES

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(cors())

//SOCKET.IO
io.on('connection', socket => {
  console.log("a user connected");
  socket.emit('request', /* … */); // emit an event to the socket
  io.emit('previous_messages', {message:"Message1",message2:"Message2"}); // emit an event to all connected sockets
  socket.on('reply', () => { /* … */ }); // listen to the event
  socket.on('disconnect', () => {
    console.log('user disconnected');
  })

  socket.on('user_message', (newMessage) => {
    io.emit('new_message',newMessage); // emit an event to all connected sockets
  })
});

//ROUTERS
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter); 
app.use("/api/messages", messagesRouter); 
app.use("/api/cart", cartRouter);
app.use("/api/orders", ordersRouter);

// FOR HEROKU
app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});


const server = httpServer.listen(port, () => {
  console.log(`Eshop app listening on port ${port}`);
});

server.on('error', (err) => console.log('Express Server Error: ' + err) )