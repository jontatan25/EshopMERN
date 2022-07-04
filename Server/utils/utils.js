import { compareSync, hashSync, genSaltSync } from "bcrypt";
import jwt from "jsonwebtoken";

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

// function issueJWT(user) {
//     const _id = user._id;
  
//     const expiresIn = '1d';
  
//     const payload = {
//       sub: _id,
//       iat: Date.now()
//     };
  
//     const signedToken = jsonwebtoken.sign(payload, "secretWord", { expiresIn: expiresIn, algorithm: 'RS256' });
  
//     return {
//       token: "Bearer " + signedToken,
//       expires: expiresIn
//     }
//   }

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

export default {authenticateToken};
