import { saveUser, loginUser, deleteUser } from "../api/user.js";

async function saveUserController(req, res) {
  try {
    const user = req.body;
    const saveResult = await saveUser(user);
    res.json(saveResult);
  } catch (error) {
    console.log("Error in Users Controller:" + error);
  }
}

async function loginController(req, res) {
  try {
    const loginInfo = { email: req.body.email, password: req.body.password };
    const loginResult = await loginUser(loginInfo);
    res.json(loginResult);
  } catch (error) {
    console.log("Error in Users Controller:" + error);
  }
}

async function deleteController(req, res) {
  try {
    const deleteUserResult = await deleteUser(req.body.email);
    res.json(deleteUserResult);
  } catch (error) {
    console.log("Error in Users Controller:" + error);
  }
}

export { saveUserController, loginController, deleteController };
