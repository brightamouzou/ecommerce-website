import * as TYPES from "../types/shoes";
import Axios from "axios";
const ERROR_MESSAGE = "Oups! Une erreur est survenue lors du chargement";

export const loadWatches =
  (page = 0, sex = "all", brand = "A") =>
  async (dispatch) => {
    dispatch({ type: TYPES.IS_LOADING_WATCHES });

    try {
      const { data: watches } = await Axios({
        method: "GET",
        url: `/api/articles/accessories/watches?page=${page}&&sex=${sex}&&brand=${brand}`,
      });

      if (watches) {
        dispatch({
          type: TYPES.LOADING_SUCCESS_WATCHES,
          payload: watches.items,
        });
      }
    } catch (e) {
      dispatch({ type: TYPES.LOADING_ERROR_WATCHES, payload: ERROR_MESSAGE });
    }
  };

export const loadSportMats =
  (page = 0, sex = "all", brand = "A") =>
  async (dispatch) => {
    dispatch({ type: TYPES.IS_LOADING_SPORTMATS });

    try {
      const { data: sportMats } = await Axios({
        method: "GET",

        url: `/api/articles/accessories/sportsMats?page=${page}&&sex=${sex}&&brand=${brand}`,
      });

      if (sportMats) {
        dispatch({
          type: TYPES.LOADING_SUCCESS_SPORTMATS,
          payload: sportMats.items,
        });
      }
    } catch (e) {
      dispatch({ type: TYPES.LOADING_ERROR_SPORTMATS, payload: ERROR_MESSAGE });
    }
  };

export const socks =
  (page = 0, sex = "all", brand = "A") =>
  async (dispatch) => {
    dispatch({ type: TYPES.IS_LOADING_SOCKS });

    try {
      const { data: socks } = await Axios({
        method: "GET",

        url: `/api/articles/accessories/socks?page=${page}&&sex=${sex}&&brand=${brand}`,
      });

      if (socks) {
        dispatch({ type: TYPES.LOADING_SUCCESS_SOCKS, payload: socks.items });
      }
    } catch (e) {
      dispatch({ type: TYPES.LOADING_ERROR_SOCKS, payload: ERROR_MESSAGE });
    }
  };

