import { compareSync, hashSync, genSaltSync } from "bcrypt";
import "dotenv/config.js";
import jwt from "jsonwebtoken";
import minimist from "minimist";

let consoleInputs = minimist(process.argv.slice(2));

function confirmPassword(password,confirmPassword){
  if (password === confirmPassword) return true;
  else return false
}

function isValidPassword(user, password) {
  return compareSync(password, user.password);
}

function createHash(password) {
  return hashSync(password, genSaltSync(10), null);
}

function signJWT(userSaved) {
  const expirationTime = process.env.EXPIRE_TIME || 3000; // Console input or 3000 seconds
  const signedToken = jwt.sign(
    {
      data: userSaved,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: expirationTime,
    }
  );

  return {
    token: signedToken,
    expires: expirationTime,
  };
}
function signJWTLogin(user) {
  const expirationTime = consoleInputs.EXP || 30000; // Console input or 300 seconds
  const signedToken = jwt.sign(
    { data: user[0]._id.toString() },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: expirationTime,
    }
  );

  return {
    token: signedToken,
    expires: expirationTime,
  };
}


function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.redirect("/users/login");
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

export {
  confirmPassword,
  authenticateToken,
  signJWT,
  signJWTLogin,
  createHash,
  isValidPassword,
};
