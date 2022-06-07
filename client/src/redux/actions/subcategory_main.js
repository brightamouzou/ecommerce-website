import Axios from "axios";
import * as SHOES_TYPES from "../types/shoes_main";
import * as CLOTHES_TYPES from "../types/clothes_main";
import * as ACCESSORIES_TYPES from "../types/accessories_main";
const ERROR_MESSAGE = "Oups! Une erreur est survenue lors du chargement";
const NOT_FOUND_MESSAGE="Aucun article trouvé";

const allTypes={
  shoes:SHOES_TYPES,
  clothes:CLOTHES_TYPES,
  accessories:ACCESSORIES_TYPES
}

const subCategoriesMap = {
  shoes: {
    lifestyle: "LIFESTYLE",
    basket: "BASKET",
    tennis: "TENNIS",
    foot: "FOOT",
    all: "ALL",
  },
  clothes: {
    pants: "PANTS",
    jerseys: "JERSEYS",
    shorts: "SHORTS",
    tShirts: "TSHIRTS",
    sweatShirts: "SWEATSHIRTS",
  },
  accessories: {
    watches: "WATCHES",
    hats: "HATS",
    socks: "SOCKS",
    sportMats: "SPORTMATS",
  },
};

export const getSpecificSubCategory =
  (category, subCategory) => async (dispatch) => {
    const TYPES = allTypes[category]?allTypes[category]:null;
    console.log("types : ", TYPES["LOADING_ERROR_TSHIRT"]);
    console.log("began");
    const subCategoryStr = subCategoriesMap[category][String(subCategory)]
      ? subCategoriesMap[category][String(subCategory)]
      : "";

    if (subCategoryStr.length && TYPES) {
      try {
        const availableSubCategory =TYPES[`IS_LOADING_${subCategoryStr}`];
        dispatch({type:availableSubCategory});
        const { data } = await Axios({
            method:"GET",
            url: `/api/articles/subcategory/${category}?subCategory=${subCategory}`,
        });
        console.log(data);

        if (data.errorMessage) {
          Promise.reject(ERROR_MESSAGE);
        }
        if (data.found) {
          dispatch({
            type: (TYPES[`LOADING_SUCCESS_${subCategoryStr}`]),
            payload: { ...data.items },
          });
        } else {
          dispatch({
            type: TYPES[`LOADING_ERROR_${subCategoryStr}`],
            payload: NOT_FOUND_MESSAGE,
          });
        }
      } catch (e) {
        console.log(e.message);
        dispatch({
          type: (TYPES[`LOADING_ERROR_${subCategoryStr}`]),
          payload: ERROR_MESSAGE,
        });
      }
    }
  };
