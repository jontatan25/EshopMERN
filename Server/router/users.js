import express from "express";

const { Router } = express;
const usersRouter = Router();
import {Strategy as LocalStrategy } from "passport-local"
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import passport from "passport";
import { compareSync, hashSync, genSaltSync } from "bcrypt";
// import { isValidPassword,createHash,postSignup,failSignup } from "../utils/utils.js";

import Container from "../mongoContainerUsers.js";

const contenedorUsers = new Container("users");

//Passport JWT Authentication

var opts = {};
opts.passReqToCallback = true ;
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secretWord";
opts.algorithms = ["RS256"];
opts.jsonwebtokenOptions = {};

// passport.use(
//   "signup",
//   new LocalStrategy(
//     { passReqToCallback: true },
//     (req, email, password, done) => {
//       const findUser = async () => {
//         try {
//           const user = await contenedorUsers.getUserByEmail(email);
//           if (user.length > 0) {
//             console.log("user is already in use");
//             return done(null, false);
//           } else {
//             const newUser = {
//               email: req.body.email,
//               password: createHash(password),
//               username: req.body.username,
//               address: req.body.address,
//               cart: [],
//             };
//             const saveUser = async () => {
//               try {
//                 await contenedorUsers.saveUser(newUser);
//                 console.log("Nuevo Usuario creado");
//               } catch (error) {
//                 console.log(error);
//               }
//             };
//             saveUser();
//             return done(null, true);
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       };
//       findUser();
//     }
//   )
// );

//JWT utils

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

function issueJWT(user) {
    const _id = user._id;
  
    const expiresIn = '1d';
  
    const payload = {
      sub: _id,
      iat: Date.now()
    };
  
    const signedToken = jsonwebtoken.sign(payload, "secretWord", { expiresIn: expiresIn, algorithm: 'RS256' });
  
    return {
      token: "Bearer " + signedToken,
      expires: expiresIn
    }
  }

function postSignup(req, res) {
  var user = req.user;
  const jwt = issueJWT(user)
  res.json({success: true, user: user,token:jwt.token,expiresnIn: jwt.expires});
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
  const passwordHash = createHash(req.body.password)
  const userEncrypted = {...req.body, password: passwordHash}
  const saveProduct = await contenedorUsers.saveUser(userEncrypted);
  res.send({
    message: "User has been posted",
    Product: saveProduct,
  });
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

usersRouter.post('/login', function (req, res, next) {
  passport.authenticate('local', {session: false}, (err, user, info) => {
      if (err || !user) {
          return res.status(400).json({
              message: 'Something is not right',
              user   : user
          });
      }
     req.login(user, {session: false}, (err) => {
         if (err) {
             res.send(err);
         }
         // generate a signed son web token with the contents of user object and return it in the response
         const token = jwt.sign(user, 'your_jwt_secret');
         return res.json({user, token});
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
