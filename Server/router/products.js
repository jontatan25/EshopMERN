import express from "express";

const { Router } = express;
const productsRouter = Router();

import Container from "../mongoContainerProducts.js"
const productsContainer = new Container("products");

function checkAuthentication(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    console.log("Usuario no Logeado,redirect a Login");
    res.send("redirect a Login");
  }
}

// productsRouter.get("/admin", async (req, res) => {
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
productsRouter.post("/", async (req, res) => {
 
    const saveProduct = await productsContainer.saveProduct(req.body);
    res.send({
      message: "Product has been posted",
      Product: saveProduct
    });

});

productsRouter.get("/:id", async (req, res) => {
  const user = await productsContainer.getProductById(req.params.id);
  res.send({
    message: "USERS",
    data: user,
  });
});

// productsRouter.put("/:id", async (req, res) => {
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

productsRouter.delete("/:id", async (req, res) => {

  console.log(req.params.id)

    const productById = await productsContainer.getProductById(req.params.id);
    if (!productById) {
      res.send({
        error: `"El producto con el id # ${req.params.id} no existe"`,
      });
    } else {
      await productsContainer.deleteProduct(req.params.id)
      res.send({
        message: `"El producto con el id # ${req.params.id} ha sido borrado`,
      });
      ;
    }
 
});


export default productsRouter;
