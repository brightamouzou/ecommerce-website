import * as TYPES from "../types/accessories_main";
const accessroriesInitialState = {
  isLoading: false,
  socks: [],
  watches: [],
  sportMats: [],
  hats: [],
  bags: [],
  all: [],
};

const accessoriesReducer = (state = accessroriesInitialState, action) => {
  if (
    [
      TYPES.IS_LOADING_SOCKS,
      TYPES.IS_LOADING_HATS,
      TYPES.IS_LOADING_SPORTMATS,
      TYPES.IS_LOADING_WATCHES,
      TYPES.IS_LOADING_ALL_ACCESSORIES,
    ].includes(action.type)
  ) {
    return {
      ...state,
      isLoading: true,
    };
  }
  switch (action.type) {
    case TYPES.LOADING_SUCCESS_ALL_ACCESSORIES:
      return {
        ...state,
        all: action.payload,
      };
    case TYPES.LOADING_SUCCESS_WATCHES:
      return {
        ...state,
        watches: action.payload,
      };

    case TYPES.LOADING_SUCCESS_SOCKS:
      return {
        ...state,
        socks: action.payload,
      };
    case TYPES.LOADING_SUCCESS_HATS:
      return {
        ...state,
        hats: action.payload,
      };

    case TYPES.LOADING_SUCCESS_SPORTMATS:
      return {
        ...state,
        sportMats: action.payload,
      };

    default:
      return state;
  }
};

export default accessoriesReducer;

