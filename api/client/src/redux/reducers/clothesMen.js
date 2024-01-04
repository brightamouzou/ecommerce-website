import * as TYPES  from "../types/clothes_main";

const clothesInitialState={
    isLoading:true,
    all:[],
    pants:[] ,
    tShirts: [],
    loadSweatShirts:[],
    shorts:[],
    jerseys:[],
    errorMessage:"",
}


const clothesReducer=(state=clothesInitialState, action)=>{
    if([TYPES.IS_LOADING_JERSEY,TYPES.IS_LOADING_ALL_CLOTHES,TYPES.IS_LOADING_PANTS,TYPES.IS_LOADING_SHORTS,TYPES.IS_LOADING_TSHIRTS,TYPES.IS_LOADING_SWEATSHIRTS].includes(action.type)){
        return{
            ...state,
            isLoading:true
        }
    }
     if([TYPES.LOADING_ERROR_JERSEY,TYPES.LOADING_ERROR_PANTS,TYPES.LOADING_ERROR_SHORTS,TYPES.IS_LOADING_TSHIRTS,TYPES.IS_LOADING_SWEATSHIRTS,TYPES.LOADING_ERROR_ALL_CLOTHES].includes(action.type)){
        return{
            ...state,
            isLoading:false,
            errorMessage:action.payload
        }
    }
    switch (action.type) {
      case TYPES.LOADING_SUCCESS_ALL_CLOTHES:
        return {
          ...state,
          all: action.payload,
        };
      case TYPES.LOADING_SUCCESS_JERSEY:
        return {
          ...state,
          jerseys: action.payload,
        };
      case TYPES.LOADING_SUCCESS_SHORTS:
        return {
          ...state,
          shorts: action.payload,
        };
      case TYPES.LOADING_SUCCESS_PANTS:
        return {
          ...state,
          pants: action.payload,
        };

      case TYPES.LOADING_SUCCESS_SWEATSHIRTS:
        return {
          ...state,
          pants: action.payload,
        };
      default:
        return state;
    }

}
export default clothesReducer;

