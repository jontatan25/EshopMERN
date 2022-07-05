import express from "express";
import "dotenv/config.js";
const { Router } = express;
const usersRouter = Router();

import { compareSync, hashSync, genSaltSync } from "bcrypt";
import utils from "../utils/utils.js"

import Container from "../mongoContainerUsers.js";

const contenedorUsers = new Container("users");
const jwtAuth = utils.authenticateToken
const signJWT = utils.signJWT
const signJWTLogin = utils.signJWTLogin

//BCrypt

function isValidPassword(user, password) {
  return compareSync(password, user.password);
}

function createHash(password) {
  return hashSync(password, genSaltSync(10), null);
}

//ROUTES
usersRouter.post("/signup", async (req, res) => {
  // another LAYER - Encrypting
  const passwordHash = createHash(req.body.password);
  const userEncrypted = { ...req.body, password: passwordHash };
  const userSaved = await contenedorUsers.saveUser(userEncrypted);

  if (userSaved.status != 409) {
    const accessToken = signJWT(userSaved)
    res.json({
      success: true,
      user: userSaved,
      token: accessToken.token,
      expiresnIn: accessToken.expires
    });
  } else res.status(userSaved.status).json(userSaved.reason);
});

usersRouter.get("/protected",jwtAuth, (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: "You are authorized to access" ,user: req.user });
});
// usersRouter.get("/signup", async (req, res) => {
//   res.send({
//     message: "Register Page",
//   });
// });

// usersRouter.get("/failsignup", async (req, res) => {
//   res.send({
//     message: "FailSignup",
//   });
// });

usersRouter.post("/login", async function (req, res, next) {
  const user = await contenedorUsers.getUserByEmail(req.body.email);
  if (user.length == 0) {
    res.status(401).json({ success: false, message: "User not found" });
  } else if (!isValidPassword(user[0],req.body.password)) {
    res
      .status(401)
      .json({ success: false, message: "you entered the wrong password" });
  } else {
    // const tokenObject = issueJWT(user);
    const accessToken = signJWTLogin(user)
    res.status(200).json({
      success: true,
      user: user[0],
      token: accessToken.token,
      expiresnIn: accessToken.expires
    });
  }
});

usersRouter.get("/login", async (req, res) => {
  res.send({
    message: "Login Page",
  });
});

usersRouter.get("/:email", async (req, res) => {
  const user = await contenedorUsers.getUserByEmail(req.params.email);
  res.send({
    message: "USERS",
    data: user,
  });
});

usersRouter.delete("/id/:id", async (req, res) => {
  console.log(req.params.id);
  const productById = await contenedorUsers.getUserById(req.params.id);
  if (!productById) {
    res.send({
      error: `"El producto con el id # ${req.params.id} no existe"`,
    });
  } else {
    await contenedorUsers.deleteUser(req.params.id);
    res.send({
      message: `"El producto con el id # ${req.params.id} ha sido borrado`,
    });
  }
});

export default usersRouter;
