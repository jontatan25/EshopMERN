import express from "express";

const { Router } = express;
const usersRouter = Router();
// import {Strategy as LocalStrategy } from "passport-local"
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import passport from "passport";
import { compareSync, hashSync, genSaltSync } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
// import { isValidPassword,createHash,postSignup,failSignup } from "../utils/utils.js";

import Container from "../mongoContainerUsers.js";

const contenedorUsers = new Container("users");

//Passport JWT Authentication

var opts = {};
opts.passReqToCallback = true;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secretWord";
opts.algorithms = ["RS256"];
opts.jsonwebtokenOptions = {};

// passport.use(
//   "login",
//   new LocalStrategy(opts, (payload, done) => {
//     const findUser = async () => {
//       try {
//         await contenedorUsers.getUserByEmail(payload.email).then((user) => {
//           if (user) {
//             console.log("user found");
//             return done(null, user);
//           } else {
//             console.log("Not Authorized");
//             return done(null, false);
//           }
//         });

//         // else if (!isValidPassword(user[0], password)) {
//         //   console.log("Invalid password");
//         //   return done(null, false);
//         // }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     findUser();
//   })
// );

//JWT utils

function issueJWT(user) {
  const _id = user._id;

  const expiresIn = 60;

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, "secretWord", {
    expiresIn: expiresIn,
    
  });

  return {
    token: "Bearer " + signedToken,
    expires: expiresIn,
  };
}

function isValidPassword(user, password) {
  return compareSync(password, user.password);
}

function createHash(password) {
  return hashSync(password, genSaltSync(10), null);
}

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    console.log("Usuario no Logeado,redirect a Login");
    res.send("redirect a Login");
  }
}

function postSignup(req, res) {
  var user = req.user;
  const jwt = issueJWT(user);
  res.json({
    success: true,
    user: user,
    token: jwt.token,
    expiresnIn: jwt.expires,
  });
}
function failSignup(req, res) {
  res.send("Error en Signup");
}
function postLogin(req, res) {
  var user = req.user;
  res.send("Usuario Loggeado");
}
function failLogin(req, res) {
  res.send("Error en login");
}
////////////////////////UTILS
usersRouter.post("/signup", async (req, res) => {
  //another LAYER - Encrypting
  // const passwordHash = createHash(req.body.password);
  // const userEncrypted = { ...req.body, password: passwordHash };
  // const userSaved = await contenedorUsers.saveUser(userEncrypted);
  const userSaved = await contenedorUsers.saveUser(req.body);
  
  if (userSaved.status != 409) {
    const jwt = issueJWT(userSaved);
    res.json({
      success: true,
      user: userSaved,
      token: jwt.token,
      expiresnIn: jwt.expires,
    });
  } else res.status(userSaved.status).send(userSaved.reason);
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

usersRouter.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something is not right",
        user: user,
      });
    }
    req.login(user, { session: false }, (err) => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(user, "your_jwt_secret");
      return res.json({ user, token });
    });
  })(req, res);
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
