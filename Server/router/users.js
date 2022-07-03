import express from "express";
import "dotenv/config.js";
const { Router } = express;
const usersRouter = Router();

import { compareSync, hashSync, genSaltSync } from "bcrypt";
import jwt from "jsonwebtoken";
// import { isValidPassword,createHash,postSignup,failSignup } from "../utils/utils.js";

import Container from "../mongoContainerUsers.js";

const contenedorUsers = new Container("users");

//Passport JWT Authentication

// var opts = {};
// opts.passReqToCallback = true;
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = process.env.ACCESS_TOKEN_SECRET;
// opts.jsonwebtokenOptions = {};

//JWT utils

function issueJWT(user) {
  const _id = user._id;
  const expiresIn = "1d";
  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: expiresIn,
  });

  return {
    token: signedToken,
    expires: expiresIn,
  };
}
const posts = [{username:"user One"},{username:"user Two"}]

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err) 
      return res.sendStatus(403)
    }
    req.user = user
    next()
  })
} 

function isValidPassword(user, password) {
  return compareSync(password, user.password);
}

function createHash(password) {
  return hashSync(password, genSaltSync(10), null);
}

// function checkAuthentication(req, res, next) {
//   if (req.isAuthenticated()) {
//     next();
//   } else {
//     console.log("Usuario no Logeado,redirect a Login");
//     res.send("redirect a Login");
//   }
// }

// function postSignup(req, res) {
//   var user = req.user;
//   const jwt = issueJWT(user);
//   res.json({
//     success: true,
//     user: user,
//     token: jwt.token,
//     expiresnIn: jwt.expires,
//   });
// }
// function failSignup(req, res) {
//   res.send("Error en Signup");
// }
// function postLogin(req, res) {
//   var user = req.user;
//   res.send("Usuario Loggeado");
// }
// function failLogin(req, res) {
//   res.send("Error en login");
// }
////////////////////////UTILS
usersRouter.post("/signup", async (req, res) => {
  //another LAYER - Encrypting
  // const passwordHash = createHash(req.body.password);
  // const userEncrypted = { ...req.body, password: passwordHash };
  // const userSaved = await contenedorUsers.saveUser(userEncrypted);
  const userSaved = await contenedorUsers.saveUser(req.body);

  if (userSaved.status != 409) {
    const accessToken = jwt.sign(userSaved, process.env.ACCESS_TOKEN_SECRET)
    res.json({
      success: true,
      user: userSaved,
      token: accessToken,
      expiresnIn: '1d',
    });
  } else res.status(userSaved.status).json(userSaved.reason);
});

usersRouter.get("/protected",authenticateToken, (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: "You are authorized to access" ,user: req.user });
});
usersRouter.get("/signup", async (req, res) => {
  res.send({
    message: "Register Page",
  });
});

usersRouter.get("/failsignup", async (req, res) => {
  res.send({
    message: "FailSignup",
  });
});

usersRouter.post("/login", async function (req, res, next) {
  const user = await contenedorUsers.getUserByEmail(req.body.email);

  if (user.length == 0) {
    res.status(401).json({ success: false, message: "User not found" });
  } else if (req.body.password != user[0].password) {
    res
      .status(401)
      .json({ success: false, message: "you entered the wrong password" });
  } else {
    // const tokenObject = issueJWT(user);
    const accessToken = jwt.sign(user[0]._id.toString(), process.env.ACCESS_TOKEN_SECRET)
    res.status(200).json({
      success: true,
      user: user[0],
      token: accessToken,
      expiresnIn: '1d',
    });
  }
});

usersRouter.get("/:email", async (req, res) => {
  const user = await contenedorUsers.getUserByEmail(req.params.email);
  res.send({
    message: "USERS",
    data: user,
  });
});

usersRouter.delete("/:id", async (req, res) => {
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
