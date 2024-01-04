import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import menShoesReducer from "./reducers/shoesMen";
import menClothesReducer from "./reducers/clothesMen";
import accessoriesReducer from "./reducers/accessories";
import cartReducer from "./reducers/CartUtils";
import UsersReducer from "./reducers/user"

const mainReducer = combineReducers({
  menShoes: menShoesReducer,
  menClothes: menClothesReducer,
  accessories: accessoriesReducer,
  cart: cartReducer,
  userState:UsersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
