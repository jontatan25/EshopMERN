import axios from "axios";

 async function getProducts() {
  const res = await axios.get(
    `https://jhonndevshop.vercel.app/api/products`,
    // {
    //   headers: { Authorization: `Bearer ${token}` },
    // }
    // "http://192.168.0.105:8080/products",
    // {
    //   headers: {
    //     Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjJkN2M0NzQwM2I0ZGE0ZGI4ZGZjMzEwIiwiaWF0IjoxNjY2MjU0MDQ4LCJleHAiOjE2NjYyODQwNDh9.HFcu1vGdhipD3laWXDXTpivVpmhkOsd5dXXhXh4VALQ"}`,
    //   },
    // }
  );
  return res.data.products;
};
 async function getProductByID(productID) {
  const res = await axios.get(
    // `https://jhonndevshop.vercel.app/api/products/id/${id}`,
    // {
    //   headers: { Authorization: `Bearer ${token}` },
    // }
  `https://jhonndevshop.vercel.app/api/products/id/${productID}`,
  );
  return res.data.product;
};
 async function getCountriesInfo() {
  const res = await axios.get(
   " https://countriesnow.space/api/v0.1/countries/states"
  );
  return res.data.data;
};
 export {getProducts,getProductByID,getCountriesInfo};

