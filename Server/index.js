import express from "express";
const app = express();
//ROUTERS
import usersRouter from "./router/users.js";
import productsRouter from "./router/products.js";
import messagesRouter from "./router/messages.js";
import ordersRouter from "./router/orders.js";
import cartRouter from "./router/cart.js";
//Libraries
import minimist from "minimist";
import bodyParser from "body-parser";
import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";

//Inputs from Console when starting the server
let consoleInputs = minimist(process.argv.slice(2));

const port = consoleInputs.PORT || 8080;

//MIDDLEWARES

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//ROUTERS
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/messages", messagesRouter);
app.use("/cart", cartRouter);
app.use("/order", ordersRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
