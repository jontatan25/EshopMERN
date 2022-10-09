function saveCartDTO(userInfo) {
  const date = new Date();
  const dateString = date.toString();
  const cartDTO = {
    email: userInfo.email,
    date: dateString,
    items: [],
    address: userInfo.address,
  };
  return cartDTO;
}

function addNewProductDTO(product) {
  const idToString = product._id.toString();
  const newProduct = {
    _id: idToString, 
    name: product.name,
    price: product.price,
    URLPhoto: product.URLPhoto,
    description: product.description,
    category: product.category,
    quantity: product.quantity,
  };
  return newProduct;
}

export { saveCartDTO,addNewProductDTO };
