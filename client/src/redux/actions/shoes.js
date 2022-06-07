import Axios from 'axios'
import * as TYPES from '../types/shoes_main'
const ERROR_MESSAGE = "Oups! Une erreur est survenue lors du chargement";
const NOT_FOUND_MESSAGE = "Aucun article trouvé";

const subCategoriesMap = {
  shoes: {
    lifestyle: "LIFESTYLE",
    basket: "BASKET",
    tennis: "TENNIS",
    foot: "FOOT",
    all: "ALL",
  },
  clothes:{
    pants:"PANTS",
    jerseys:"JERSEYS",
    shorts:"SHORTS",
    tShirts:"TSHIRTS",
    sweatShirts:"SWEATSHIRTS"
  },
  accessories:{
    watches:"WATCHES",
    hats:"HATS",
    socks:"SOCKS",
    sportMats:"SPORTMATS"
  }
};

export const loadAll=(page=0, brand="all")=>async(dispatch)=>{
    dispatch({type:TYPES.IS_LOADING_ALL})
    try{
        const {data:all}=await Axios({
            method:"GET",
            url:`/api/artciles/s/shoes/all?page=${page}&&brand=${brand}`,/*/s in the path means thar i am sorting by sex , in this case(all)*/
        })
        if (all.errorMessage){
            Promise.reject(ERROR_MESSAGE)
        }
        if(all){
            dispatch({type:TYPES.LOADING_SUCCESS_ALL, payload:all.items})
        }

    }catch(e){
        dispatch({type:TYPES.LOADING_ERROR_ALL, payload:ERROR_MESSAGE})
    }
    
}

export const loadMen=(page=0, brand="all")=>async(dispatch)=>{
    dispatch({type:TYPES.IS_LOADING_ALL})
    try{
        const {data:men}=await Axios({
            method:"GET",
            url:`/api/artciles/s/shoes/men?page=${page}&&brand=${brand}`,
        })

        if (men.errorMessage) {
           Promise.reject(ERROR_MESSAGE);
        }

        if(men){
            dispatch({type:TYPES.LOADING_SUCCESS_MEN, payload:men.items})
            return;
        }

    }catch(e){
        dispatch({type:TYPES.LOADING_ERROR_ALL, payload:ERROR_MESSAGE})
    }
    
}

export const loadWomen=(page=0, brand="all")=>async(dispatch)=>{
    dispatch({type:TYPES.IS_LOADING_WOMEN})
    try{
        const {data:women}=await Axios({
            method:"GET",
            url:`/api/artciles/s/shoes/women?page=${page}&&brand=${brand}`,
            headers:{
                "Content-Type":"application/json"
                
            },
            body:JSON.stringify({
                page:page,
            })
        })
        if (women.errorMessage) {
        Promise.reject(ERROR_MESSAGE);
        }

        if(women){
            dispatch({type:TYPES.LOADING_SUCCESS_WOMEN, payload:women.items})
            return
        }

    }catch(e){
        dispatch({type:TYPES.LOADING_ERROR_WOMEN, payload:ERROR_MESSAGE})
    }
    
}

export const loadChildren=(page=0,brand="all")=>async(dispatch)=>{
    dispatch({type:TYPES.IS_LOADING_CHILDREN})
    try{
        const {data:children}=await Axios({
            method:"GET",
            url:`/api/artciles/s/shoes/children?page=${page}&&brand=${brand}`,
            headers:{
                "Content-Type":"application/json"
      
            },
            body:JSON.stringify({
                page:page,
            })
        })

        if (children.errorMessage) {
            Promise.reject(ERROR_MESSAGE);
        }

        if(children){
            dispatch({type:TYPES.LOADING_SUCCESS_CHILDREN, payload:children.items})
            return
        }

    }catch(e){
        dispatch({type:TYPES.LOADING_ERROR_CHILDREN, payload:ERROR_MESSAGE})
    }
    
}

// export const loadLifeStyle=(page=0, sex="all", brand="all")=>async(dispatch)=>{

//     dispatch({type:TYPES.IS_LOADING_LIFESTYLE})
//     try{
//         const {data:lifetyle}=await Axios({
//             method:"GET",
//             url:`/api/artciles/shoes/women?page=${page}&&sex=${sex}&&brand=${brand}`,
//             headers:{
//                 "Content-Type":"application/json"
                
//             }

//         })

//         if (lifetyle.errorMessage) {
//             Promise.reject(ERROR_MESSAGE);
//         }

//         if(lifetyle){
//             dispatch({type:TYPES.LOADING_SUCCESS_LIFESTYLE, payload:lifetyle.items})
//             return
//         }

//     }catch(e){
//         dispatch({type:TYPES.LOADING_ERROR_LIFESTYLE, payload:ERROR_MESSAGE })
//     }
    
// }


// export const loadTennis=(page=0, sex="all", brand="all")=>async(dispatch)=>{
//     dispatch({type:TYPES.IS_LOADING_TENNIS})
//     try{
//         const {data:tennis}=await Axios({
//             method:"GET",
//             url:`/api/artciles/shoes/tennis?page=${page}&&sex=${sex}&&brand=${brand}`,
//         })

//         if (tennis.errorMessage) {
//             Promise.reject(ERROR_MESSAGE);
//         }
//         if(tennis){
//             dispatch({type:TYPES.LOADING_SUCCESS_TENNIS, payload:tennis.items})
//             return
//         }

//     }catch(e){
//         dispatch({type:TYPES.LOADING_ERROR_TENNIS, payload:ERROR_MESSAGE})
//     }
    
// }

// export const loadBasket=(page=0, sex="all", brand="all")=>async(dispatch)=>{
//     dispatch({type:TYPES.IS_LOADING_BASKET})
//     try{
//         const {data:basket}=await Axios({
//             method:"GET",
//             url:`/api/artciles/shoes/basket?page=${page}&&sex=${sex}&&brand=${brand}`,
//         })
//         if (basket.errorMessage) {
//            Promise.reject(ERROR_MESSAGE);
//          }
//         if(basket){
//             dispatch({type:TYPES.LOADING_SUCCESS_BASKET, payload:basket.items})
//             return
//         }

//     }catch(e){
//         dispatch({type:TYPES.LOADING_ERROR_BASKET, payload:ERROR_MESSAGE})
//     }
// }

// export const loadFoot=(page=0, sex="all",brand="all")=>async(dispatch)=>{
//     dispatch({type:TYPES.IS_LOADING_FOOT})
//     try{
//         const {data:foot}=await Axios({
//             method:"GET",
//             url:`/api/artciles/shoes/foot?page=${page}&&sex=${sex}&&brand=${brand}`,
//         })

//         if (foot.errorMessage) {
//             Promise.reject(ERROR_MESSAGE);
//         }
//         if(foot){
//             dispatch({type:TYPES.LOADING_SUCCESS_FOOT, payload:foot.items})
//             return
//         }

//     }catch(e){
//         dispatch({type:TYPES.LOADING_ERROR_FOOT, payload:ERROR_MESSAGE})
//     }
    
// }

export const getSpecificSubCategory=(category,subCategory)=>async (dispatch)=>{
    const subCategoryStr=subCategoriesMap[category][String(subCategory)]?subCategoriesMap[category][String(subCategory)]:"";

    if(subCategoryStr.length){
        try{
            const availableSubCategory = eval(`TYPES.IS_LOADING_${subCategoryStr}`);
            dispatch(availableSubCategory);
            const {data}=await Axios.get(
                `/api/articles/subcategory/shoes?subCategory=${subCategory}`
            )
            
            console.log(data);

            if(data.errorMessage){
                Promise.reject(ERROR_MESSAGE)
            }
            if(data.found){   
                dispatch({
                  type: eval(`TPYES.LOADING_SUCCESS_${subCategoryStr}`),
                  payload: { ...data.items},
                });
            }else{
                dispatch({ type: `TYPES.LOADING_ERROR_${subCategoryStr}`,payload:NOT_FOUND_MESSAGE});
            }
        }catch(e){
            dispatch({type:eval(`TYPES.LOADING_ERROR_${subCategoryStr}`),payload:ERROR_MESSAGE});
        }

    }

    
}

