import axios from "axios";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get("/products");
    return data;
  } catch (error) {
    return error.response.data;
  }
};
