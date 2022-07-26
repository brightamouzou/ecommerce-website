import * as TYPES from "../types/CartUtils";
import axios from "axios";
export const loadItems=()=>async (dispatch)=>{

    dispatch({type:TYPES.IS_LOADING})
    //Getting cartItems list
    const cartItemsArray=localStorage.getItem('cartItems').split(',').map(ele=>JSON.parse(ele))

    const cartItemsFetch=Promise.all(cartItemsArray.map(async cartItem=>{
        try{
            return axios.get(`/api/articles/${cartItem.articleCategory}/${cartItem.artcileId}/${cartItem.colorId}`)
        }catch(e){
            return
        }
    }))

    cartItemsFetch.then(cartItems=>{

        if(cartItems.length){
            dispatch({
                type:TYPES.LOADING_SUCCESS,
                payload:cartItems.map(carItem=>carItem.data)
            })
        }else{
            return
        }
    }).catch(e=>{
        dispatch({
                type:TYPES.LOADING_ERROR,
                payload:e.message
        })
    })  
    
}

export const addToCart=(artcileSlug, articleCategory,colorId,infos)=>async(dispatch, getState)=>{
    try{
        const article = await axios({
          method: "get",
          url: `/api/articles/slugandcolor/${articleCategory}/${artcileSlug}/${colorId}`,
        });

        console.log(article);
        let existingItems=getState().cart.cartItems.length?getState().cart.cartItems:[]
        if (article){
            console.log(article);
            let payload = {
              artcileId: article._id,
              category: articleCategory,
              colorId: colorId,
              slug: artcileSlug,
              // size:"M",
              // qty:1,
              size: infos.size,
              price:article.data.item.price,
              qty: infos.quantity,
            };
            dispatch({
              type: TYPES.CARD_ITEM_ADD,
              payload:payload,
            });

            let storedItems=localStorage.getItem("cartItems");
            if(storedItems) storedItems=JSON.parse(storedItems);
            if(storedItems && storedItems.length){
                let index=storedItems.findIndex(ele=>JSON.parse(ele)["colorId"]==colorId);
                if(index===-1){
                    localStorage.setItem("cartItems",JSON.stringify([...existingItems, JSON.stringify(payload)]))
                }else{
                    existingItems.splice(index,1)
                    localStorage.setItem("cartItems",JSON.stringify([...existingItems, JSON.stringify(payload)]))
                }
            }else{
                localStorage.setItem("cartItems",JSON.stringify([...existingItems, JSON.stringify(payload)]))
            }
        }

    }catch(e){
        console.log(e.message);
        return 
    }

}