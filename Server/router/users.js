import express from "express";
import { authenticateToken } from "../utils/utils.js";
import { saveUserController,loginController, deleteController } from "../controller/users.js";

const { Router } = express;
const usersRouter = Router();

usersRouter.post("/signup", saveUserController);
usersRouter.post("/login", loginController);

usersRouter.get("/protected", authenticateToken, (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "You are authorized to access",
    user: req.user,
  });
});


usersRouter.delete("/delete",authenticateToken, deleteController)

export default usersRouter;
