// import * as TYPES from "../types/CartUtils";
// import axios from "axios";
// export const loadItems=()=>async (dispatch)=>{

//     dispatch({type:TYPES.IS_LOADING})
//     //Getting cartItems list
//     const cartItemsArray=localStorage.getItem('cartItems').split(',').map(ele=>JSON.parse(ele))

//     const cartItemsFetch=Promise.all(cartItemsArray.map(async cartItem=>{
//         try{
//             return axios.get(`/api/articles/${cartItem.articleCategory}/${cartItem.artcileId}/${cartItem.colorId}`)
//         }catch(e){
//             return
//         }
//     }))

//     cartItemsFetch.then(cartItems=>{

//         if(cartItems.length){
//             dispatch({
//                 type:TYPES.LOADING_SUCCESS,
//                 payload:cartItems.map(carItem=>carItem.data)
//             })
//         }else{
//             return
//         }
//     }).catch(e=>{
//         dispatch({
//                 type:TYPES.LOADING_ERROR,
//                 payload:e.message
//         })
//     })  
    
// }

// export const addToCart=(artcileId, articleCategory, infos)=>async(dispatch, getState)=>{
//     try{
//         const article=await axios({
//             method:"get",
//             url:`/api/articles/${articleCategory}/${artcileId}`
//         })
//         if (article){
//             dispatch({
//                 type:TYPES.CARD_ITEM_ADD, 
//                 payload:{
//                     ...infos, 
//                     artcileId:article.articleId, 
//                     colorId:infos.colorId,
//                     articleCategory:articleCategory,
//                     size:infos.size, 
//                     qty:infos.quantity,
//                 }
//             })
//             localStorage.setItem("cartItems", getState().cart.carItems.toString())
//         }


//     }catch(e){
//         console.log(e.message);
//         return 
//     }

// }