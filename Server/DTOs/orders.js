function createOrderDTO(userCartWithLength) {
    const date = new Date();
    const dateString = date.toString();
  const DTO = {
    _id : userCartWithLength.ordersLength,
    items: userCartWithLength.cart[0].items,
    date: dateString,
    status : 'created',
    email: userCartWithLength.cart[0].email,
    address: userCartWithLength.cart[0].address,
  }
  return DTO
}

export {createOrderDTO}