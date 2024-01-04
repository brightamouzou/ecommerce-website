import Cookies from "universal-cookie";
import * as TYPES from "../types/user"
const cookies = new Cookies();

/**J'en encodé le userId qui est le authId en base 64 avant de le stocker donc je le decode */
const authId = cookies.get("authId")? atob(cookies.get("authId")): "";
const authToken = cookies.get("authToken") ? cookies.get("authToken") : "";
const user = cookies.get("user") ? cookies.get("user") : null;
const initialState = {
  user: user,
  userId: authId,
  userToken: authToken,
  error: "",
  favoriteLoadingError: "",
  isLoadingFavorite: false,
  isLoading: false,
  favorite: [],
};

const reducer=(state=initialState,action)=>{

    switch (action.type) {
      case TYPES.LOADING:
        return {
          ...state,
          error:"",
          isLoading: true,
          user:null
        };
      case TYPES.FAVORITE_LOADING:
        return {
          ...state,
          error: "",
          isLoadingFavorite: true,
          favorite: [],
        };
      case TYPES.LOGIN_SUCCESS:
        console.log(action);
        return {
          ...state,
          isLoading: false,
          user: action.payload,
          error: "",
        };
      case TYPES.LOGIN_ERROR:
        return {
          ...state,
          isLoading:false,
          error: "Login ou mot de passe incorrect",
          user: null,
        };
      case TYPES.LOGOUT:
        return {
          userId:"",
          userToken:"",
          user:null,
          isLoading:false,
          error:""
        }
      case TYPES.FAVORITE_LOADING_ERROR:
        return {
          ...state,
          favoriteLoadingError:"Errur lors du chargement des favoris",
          favorite:[],
          isLoadingFavorite:false


        }
      case TYPES.FAVORITE_LOADING_SUCCESS:
          return {
            ...state,
            favoriteLoadingError: "",
            favorite: [...action.payload],
            isLoadingFavorite: false,
          };

      case TYPES.ADD_TO_FAVORITE:
          return {
            ...state,
            favoriteLoadingError: "",
            favorite: [...action.payload],
            isLoadingFavorite: false,
          };
      case TYPES.DELETE_FROM_FAVORITE_ERROR:
          return {
            ...state,
            favoriteLoadingError: "Erreur lors de la supression",
            isLoadingFavorite: false,
          };

      default:
        return state;
    }

}

export default reducer;