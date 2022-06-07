import * as TYPES from "../types/CartUtils";

const initialState={
    cartItems:[], 
    isLoading:false, 
    loadingError:""
}
export default function reducer(state=initialState, action){
    switch (action.type) {

        case TYPES.CARD_ITEM_ADD:

            break
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
                isLoading:false,
                cartItems:[],
                error:action.payload
            }
        default:
            return state;
    }

}