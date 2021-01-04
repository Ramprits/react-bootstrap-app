import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS
} from "../constants/productContants";
import { getAllProducts } from "../functions/productService";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    const response = await getAllProducts();
    dispatch({ type: ALL_PRODUCT_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.message
    });
  }
};
