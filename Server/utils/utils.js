import { compareSync, hashSync, genSaltSync } from "bcrypt";
import jwt from "jsonwebtoken";
import minimist from "minimist";

let consoleInputs = minimist(process.argv.slice(2));

// function isValidPassword(user, password) {
//   return compareSync(password, user.password);
// }

// function createHash(password) {
//   return hashSync(password, genSaltSync(10), null);
// }

// function checkAuthentication(req, res, next) {
//   if (req.isAuthenticated()) {
//     next();
//   } else {
//     console.log("Usuario no Logeado,redirect a Login");
//     res.send("redirect a Login");
//   }
// }

function signJWT(userSaved) {
  const expirationTime = consoleInputs.EXP || 300 // Console input or 300 seconds
  const signedToken = jwt.sign({data: userSaved}, process.env.ACCESS_TOKEN_SECRET,{

    expiresIn: expirationTime

     })
  
    return {
      token: signedToken,
      expires: 30,
    }
  }
function signJWTLogin(user) {
  const expirationTime = consoleInputs.EXP || 300 // Console input or 300 seconds
  const signedToken = jwt.sign({data:user[0]._id.toString()}, process.env.ACCESS_TOKEN_SECRET,{

    expiresIn: expirationTime
     })
  
    return {
      token: signedToken,
      expires: expirationTime,
    }
  }

// function postSignup(req, res) {
//   var user = req.user;
//   const jwt = issueJWT(user)
//   res.json({success: true, user: user,token:jwt.token,expiresnIn: jwt.expires});
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

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.redirect('/users/login')
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log(err) 
      return res.sendStatus(403)
    }
    req.user = user
    next()
  })
} 

export default {authenticateToken, signJWT, signJWTLogin};
