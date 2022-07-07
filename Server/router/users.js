import express from "express";
const { Router } = express;
const usersRouter = Router();

import { authenticateToken } from "../utils/utils.js";

import { saveUserController,loginController, deleteController } from "../controller/users.js";

usersRouter.post("/signup", saveUserController);

usersRouter.get("/protected", authenticateToken, (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "You are authorized to access",
    user: req.user,
  });
});

// Router.get("/failsignup", async (req, res) => {
//   res.send({
//     message: "FailSignup",
//   });
// });

usersRouter.post("/login", loginController);

usersRouter.get("/login",(req, res) => {
  res.send({ message: "Login Page"})
})

usersRouter.delete("/delete",authenticateToken, deleteController
);

export default usersRouter;
