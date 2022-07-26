import * as TYPES from "../types/CartUtils";

let items = localStorage.getItem("cartItems");
const initialState = {
  cartItems: items && JSON.parse(items).length ? JSON.parse(items) : [],
  isLoading: false,
  loadingError: "",
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.CARD_ITEM_ADD:
      console.log("can output");
      let index = state.cartItems.findIndex(
        (ele) => JSON.parse(ele)["colorId"] === action.payload.colorId
      );
      console.log(index);
      if (state.cartItems.length && index != -1) {
        console.log("yes");
        let items = [...state.cartItems];
        items.splice(index, 1);
        return {
          ...state,
          cartItems: [...items, JSON.stringify(action.payload)],
        };
      } else {
       
        return {
          ...state,
          cartItems: [...items, JSON.stringify(action.payload)],
        };
      }
      break;
    case TYPES.IS_LOADING:
      return {
        ...state,
        IS_LOADING: true,
      };
    case TYPES.LOADING_SUCCESS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case TYPES.LOADING_ERROR:
      return {
        ...state,
        isLoading: false,
        cartItems: [],
        error: action.payload,
      };
    default:
      return state;
  }
}
