import * as SHOES_TYPES from "../types/shoes_main";
import * as CLOTHES_TYPES from "../types/clothes_main";
import * as ACCESSORIES_TYPES from "../types/accessories_main";
import Axios  from "axios";
// import * as ACCESSORIES_TYPES from "../types/accessories";
const ERROR_MESSAGE = "Oups! Une erreur est survenue lors du chargement";

const TYPES={
    "shoes":SHOES_TYPES,
    "clothes":CLOTHES_TYPES,
    "accessories":ACCESSORIES_TYPES
}

export const loadAll =
  (CURRENT_CATEGORY,page = 0, brand = "all") =>
  async (dispatch) => {
      const CURRENT_CATEGORY_UPPER = CURRENT_CATEGORY.toUpperCase();

    dispatch({ type: TYPES[CURRENT_CATEGORY][`IS_LOADING_ALL_${CURRENT_CATEGORY_UPPER}`] });
    try {
      const { data: all } = await Axios({
        method: "GET",
        url: `/api/articles/s/all/${CURRENT_CATEGORY}?page=${page}` /*/s in the path means thar i am sorting by sex , in this case(all)*/,
      });
      console.log(all);
      if (all.errorMessage) {
        Promise.reject(ERROR_MESSAGE);
      }
      if (all) {
        dispatch({ type: TYPES[CURRENT_CATEGORY][`LOADING_SUCCESS_ALL_${CURRENT_CATEGORY_UPPER}`], payload: all.items });
      }
    } catch (e) {
      console.log(e.message);
      dispatch({ type: TYPES[CURRENT_CATEGORY][`LOADING_ERROR_ALL_${CURRENT_CATEGORY_UPPER}`], payload: ERROR_MESSAGE });
    }
  };

export const loadMen =
  (CURRENT_CATEGORY,page = 0, brand = "all") =>

  async (dispatch) => {
  const CURRENT_CATEGORY_UPPER = CURRENT_CATEGORY.toUpperCase();

    dispatch({ type: TYPES[CURRENT_CATEGORY][`IS_LOADING_ALL_${CURRENT_CATEGORY_UPPER}`]});
    try {
      const { data: men } = await Axios({
        method: "GET",
        url: `/api/articles/s/men/${CURRENT_CATEGORY}?page=${page}`,
      });

      console.log(men);
      if (men.errorMessage) {
        Promise.reject(ERROR_MESSAGE);
      }

      if (men) {
        dispatch({ type: TYPES[CURRENT_CATEGORY][`LOADING_SUCCESS_ALL_${CURRENT_CATEGORY_UPPER}`], payload: men.items });
        return;
      }
    } catch (e) {
      console.log(e.message);
      dispatch({ type: TYPES[CURRENT_CATEGORY][`LOADING_ERROR_ALL_${CURRENT_CATEGORY_UPPER}`], payload: ERROR_MESSAGE });
    }
  };


export const loadWomen =
  (CURRENT_CATEGORY,page = 0, brand = "all") =>
  async (dispatch) => {
    dispatch({ type: TYPES[CURRENT_CATEGORY].IS_LOADING_WOMEN });
    try {
      const { data: women } = await Axios({
        method: "GET",
        url: `/api/articles/s/women/${CURRENT_CATEGORY}/?page=${page}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: page,
        }),
      });
      if (women.errorMessage) {
        Promise.reject(ERROR_MESSAGE);
      }

      if (women) {
        dispatch({ type: TYPES[CURRENT_CATEGORY].LOADING_SUCCESS_WOMEN, payload: women.items });
        return;
      }
    } catch (e) {
      dispatch({ type: TYPES[CURRENT_CATEGORY].LOADING_ERROR_WOMEN, payload: ERROR_MESSAGE });
    }
  };

export const loadChildren=(CURRENT_CATEGORY,page = 0, brand = "all") =>
  async (dispatch) => {
    dispatch({ type: TYPES[CURRENT_CATEGORY].IS_LOADING_CHILDREN });
    try {
      const { data: children } = await Axios({
        method: "GET",
        url: `/api/articles/s/children/${CURRENT_CATEGORY}?page=${page}&brand=${brand}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: page,
        }),
      });

      if (children.errorMessage) {
        Promise.reject(ERROR_MESSAGE);
      }

      if (children) {
        dispatch({
          type: TYPES[CURRENT_CATEGORY].LOADING_SUCCESS_CHILDREN,
          payload: children.items,
        });
        return;
      }
    } catch (e) {
      dispatch({ type: TYPES[CURRENT_CATEGORY].LOADING_ERROR_CHILDREN, payload: ERROR_MESSAGE });
    }
  };
