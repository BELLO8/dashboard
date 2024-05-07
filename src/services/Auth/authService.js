import { BASE_URL, LOGIN } from "@/utils/constant";
import clientAxios from "../clientAxios";

export const loginUser = async (...data) => {
  return await clientAxios.post(`${BASE_URL + LOGIN}`, ...data);
};

export const getAllProduct = async () => {
  return await clientAxios.get("https://fakestoreapi.com/products");
};
