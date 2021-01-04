import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ALL
} from "../../constants/productContants";

const initialState = {
  productCollections: [],
  totalCount: 0,
  isLoading: false,
  error: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_PRODUCT_REQUEST:
      return { ...state, isLoading: true, productCollections: [] };

    case ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        totalCount: payload.productsCount,
        productCollections: payload.products
      };

    case ALL_PRODUCT_FAIL:
      console.log(payload);

      return {
        ...state,
        isLoading: false,
        error: payload,
        productCollections: []
      };

    case CLEAR_ALL:
      return { ...state, isLoading: false, error: "", productCollections: [] };
    default:
      return state;
  }
};
