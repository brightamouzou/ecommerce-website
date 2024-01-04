import * as TYPES from "../types/clothes";
import Axios from "axios";
const ERROR_MESSAGE = "Oups! Une erreur est survenue lors du chargement";

export const loadPants=(page=0, sex="all",brand="A")=>async(dispatch)=>{
    dispatch({type:TYPES.IS_LOADING_PANTS})

    try{
        const {data:pants}=await Axios({

            method:"GET",
            url:`/api/articles/clothes/pants?page=${page}&sex=${sex}&brand=${brand}`,
        })

        if (pants.errorMessage) {
            Promise.reject(ERROR_MESSAGE);
        }

        if(pants){
            dispatch({type:TYPES.LOADING_SUCCESS_PANTS, payload:pants.items})
        }


    }catch(e){

        dispatch({type:TYPES.LOADING_ERROR_PANTS, payload:ERROR_MESSAGE})

    }

    

}



export const loadShorts=(page=0, sex="all",brand="A")=>async(dispatch)=>{

    dispatch({type:TYPES.IS_LOADING_SHORTS})

    try{

        const {data:shorts}=await Axios({

            method:"GET",
            url:`/api/articles/clothes/shorts?page=${page}&sex=${sex}&brand=${brand}`,


        })
        if (shorts.errorMessage) {
            Promise.reject(ERROR_MESSAGE);
        }

        if(shorts){
            dispatch({type:TYPES.LOADING_SUCCESS_SHORTS, payload:shorts.items})
        }


    }catch(e){
        dispatch({type:TYPES.LOADING_ERROR_SHORTS, payload:ERROR_MESSAGE})

    }

}


export const loadSweatShirts=(page=0, sex="all",brand="A")=>async(dispatch)=>{

    dispatch({type:TYPES.IS_LOADING_SWEATSHIRTS})

    try{

        const { data: sweatShirts } = await Axios({
          method: "GET",
          url: `/api/articles/clothes/sweatshirts?page=${page}&sex=${sex}&brand=${brand}`,

        });
        if (sweatShirts.errorMessage) {
            Promise.reject(ERROR_MESSAGE);
        }

        if(sweatShirts){
            dispatch({type:TYPES.LOADING_SUCCESS_SWEATSHIRTS, payload:sweatShirts.items})

        }



    }catch(e){
        dispatch({type:TYPES.LOADING_ERROR_SWEATSHIRTS, payload:ERROR_MESSAGE})

    }

    

}



export const loaTShirts=(page=0, sex="all",brand="A")=>async(dispatch)=>{

    dispatch({type:TYPES.IS_LOADING_TSHIRTS})

    try{

        const { data: tShirts } = await Axios({
          method: "GET",
          url: `/api/articles/clothes/tshirts?page=${page}&sex=${sex}&brand=${brand}`,
        });
        if (tShirts.errorMessage) {
            Promise.reject(ERROR_MESSAGE);
        }

        if(tShirts){
            dispatch({type:TYPES.LOADING_SUCCESS_TSHIRTS, payload:tShirts.items})
        }

    }catch(e){
        dispatch({type:TYPES.LOADING_ERROR_TSHIRTS, payload:ERROR_MESSAGE})
    }
}



export const loadTops=(page=0, sex="all",brand="A")=>async(dispatch)=>{

    dispatch({type:TYPES.IS_LOADING_TOPS})

    try{

        const { data: tops } = await Axios({
          method: "GET",
          url: `/api/articles/clothes/tops?page=${page}&sex=${sex}&brand=${brand}`,

        });
        
        if (tops.errorMessage) {
            Promise.reject(ERROR_MESSAGE);
        }

        if(tops){

            dispatch({type:TYPES.LOADING_SUCCESS_TOPS, payload:tops.items})

        }


    }catch(e){

        dispatch({type:TYPES.LOADING_ERROR_TOPS, payload:ERROR_MESSAGE})

    }

    

}



export const loadJerseys=(page=0, sex="all",brand="A")=>async(dispatch)=>{

    dispatch({type:TYPES.IS_LOADING_JERSEYS})

    try{

        const { data: jerseys } = await Axios({
          method: "GET",
          url: `/api/articles/clothes/jerseys?page=${page}&sex=${sex}&brand=${brand}`,

        });

        if (jerseys.errorMessage) {
          Promise.reject(ERROR_MESSAGE);
        }

        if(jerseys){
            dispatch({type:TYPES.LOADING_SUCCESS_JERSEYS, payload:jerseys})

        }

    }catch(e){

        dispatch({type:TYPES.LOADING_ERROR_JERSEYS, payload:ERROR_MESSAGE})

    }

    

}


