import express from "express";
// const Contenedor = require("../Contenedor");
// const contenedor = new Contenedor("./productos.JSON");
const { Router } = express;
const usersRouter = Router();

import mongoContainer from "../mongoContainer.js"
const contenedorUsers = new mongoContainer("products");

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    console.log("Usuario no Logeado,redirect a Login");
    res.send("redirect a Login");
  }
}

// usersRouter.get("/admin", async (req, res) => {
//   const checkAdmin = await contenedor.checkAdmin();
//   if (checkAdmin) {
//     res.send({
//       message: "Success",
//       data: checkAdmin,
//     });
//   } else {
//     res.send({ error: -1, message: "Acceso Denegado" });
//   }
// });

// MONGODB

usersRouter.get("/", async (req, res) => {
  const productos = await contenedorUsers.getAllUsers();
  res.send({
    message: "USERS",
    data: productos,
  });
});

// usersRouter.get("/:id", async (req, res) => {
//   const productById = await contenedorProducts.getById(req.params.id);
//   if (!productById) {
//     res.send({
//       error: `"El producto con el id # ${req.params.id} no existe"`,
//     });
//   } else res.send(productById);
// });

usersRouter.post("/", async (req, res) => {
 
    const saveProduct = await contenedorUsers.saveUser(req.body);
    console.log(req.body)
    res.send({
      message: "Product has been posted",
      Product: saveProduct
    });

});

// usersRouter.put("/:id", async (req, res) => {
//   const checkAdmin = await contenedor.checkAdmin();
//   const producto = req.body;
//   let newProduct = { id: req.params.id, ...producto };

//   if (checkAdmin) {
//     const productById = await contenedorProducts.getById(req.params.id);
//     if (!productById) {
//       res.send({
//         error: `"El producto con el id # ${req.params.id} no existe"`,
//       });
//     } else {
//       await contenedorProducts.update(newProduct)
//         res.send({
//           message: `"El producto con el id # ${req.params.id} ha sido Actualizado"`,
//         })
//     }
//   } else {
//     res.send({ error: -1, message: "Acceso Denegado" });
//   }
// });

// usersRouter.delete("/:id", async (req, res) => {

//   const checkAdmin = await contenedor.checkAdmin();

//   if (checkAdmin) {
//     const productById = await contenedorProducts.getById(req.params.id);
//     if (!productById) {
//       res.send({
//         error: `"El producto con el id # ${req.params.id} no existe"`,
//       });
//     } else {
//       await contenedorProducts.deleteById(req.params.id)
//       res.send({
//         message: `"El producto con el id # ${req.params.id}" ha sido borrado`,
//       });
//       ;
//     }
//   } else {
//     res.send({ error: -1, message: "Acceso Denegado" });
//   }
// });


export default usersRouter;
