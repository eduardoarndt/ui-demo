import axios from "axios";
import { API_URL } from "../env/env";

export async function getAllProducts() {
  var config = { method: "get", url: API_URL + "/products/" };
  const response = await axios(config);
  const products = response.data;
  return products;
}

export async function getProduct(productId) {
  var config = { method: "get", url: API_URL + "/products/" + productId };
  const response = await axios(config);
  const product = response.data;
  return product;
}
