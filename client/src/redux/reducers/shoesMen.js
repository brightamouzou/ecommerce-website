import * as TYPES from"../types/shoes_main";

const shoesInitialState = {
  isLoading: false,
  all: [],
  novelties: [],
  lifeStyle: [],
  tennis: [],
  basket: [],
  football: [],
  errorMessage:""
};

export default function shoesReducer(state = shoesInitialState, action) {

    if([TYPES.IS_LOADING_ALL_SHOES,TYPES,TYPES.IS_LOADING_BASKET,TYPES.IS_LOADING_FOOT,TYPES.IS_LOADING_LIFESTYLE,TYPES.IS_LOADING_TENNIS].includes(action.type)){
        return {
            ...state,
            isLoading:true
        }
    }

  if([TYPES.LOADING_ERROR_ALL_SHOES,TYPES.LOADING_ERROR_BASKET,TYPES.LOADING_ERROR_LIFESTYLE,TYPES.LOADING_ERROR_FOOT,TYPES.LOADING_ERROR_TENNIS].includes(action.type)){
    return {
        ...state,
        isLoading:false,
        errorMessage:action.payload
    }
  }
    switch (action.type) {
      case TYPES.LOADING_SUCCESS_ALL_SHOES:
        return {
          ...state,
          isLoading: false,
          all: action.payload,
        };
      case TYPES.LOADING_SUCCESS_BASKET:
        return {
          ...state,
          basket: action.payload,
        };
      case TYPES.LOADING_SUCCESS_FOOT:
        return {
          ...state,
          foot: action.payload,
        };
      case TYPES.LOADING_SUCCESS_TENNIS:
        return {
          ...state,
          tennis: action.payload,
        };

      default:
        return state;
    }
}
