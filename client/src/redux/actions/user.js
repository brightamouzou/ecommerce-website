import axios from "axios";
import Cookies from "universal-cookie";
import * as TYPES from "../types/user";
import {isAuth} from "../../utils/api_calls/isAuth";
export const login = (formData) => async (dispatch) => {
  const cookies = new Cookies();

  dispatch({ type: TYPES.LOADING });
  
  try {
    let { data:authData } = await axios.post("/api/users/login", {
      ...formData,
    });
    //console.log(authData);
    if (authData.token) {
      cookies.remove("authToken");
      cookies.remove("authId");
      cookies.set("authToken", authData.token, {
        path: "/",
        httpOnly: false,
        expires: new Date(Date.now + 24 * 36e6), //24 heures
      });

      if (authData.userId) {
        cookies.set("authId", btoa(authData.userId));

        const {
          data:{ user },
        } =await axios.get(`/api/users/${authData.userId}`);
        if (user) {
          cookies.set("user", JSON.stringify({...user}));

          dispatch({ type: TYPES.LOGIN_SUCCESS, payload: { ...user } });

          //Redirection
          let params = new URLSearchParams(document.location.search);
          if(params.get("redirectUrl"))
            document.location=params.get("redirectUrl");
          else
            document.location = "/";

        } else {
          throw Error("Erreur 401");
        }
        
        // const { data: test } = await axios({
        //   method: "post",
        //   url: "/api/user-checks",
        //   headers: {
        //     Authorization: `Bearer ${authData.token}`,
        //   },
        //   data:JSON.stringify({
        //     userId:authData.userId
        //   })
          
        // });



      }
    } else {
      throw Error("Erreur 401");
    }
  } catch (err) {
    //console.log(err.message);
    dispatch({ type: TYPES.LOGIN_ERROR });
  }
};

export const logout = () => async (dispatch) => {
  //console.log("disconenct");
    const cookies = new Cookies();

    cookies.remove("authToken");
    cookies.remove("authId");
    cookies.remove("user");
    dispatch({ type: TYPES.LOGOUT });
    // document.location='/login';
};

export const addToFavorite=(articleColorId,articleSlug,articleCategory)=>async dispatch=>{
    const cookies = new Cookies();
    const userId=cookies.get("authId")?atob(cookies.get("authId")):null;
    const authToken = cookies.get("authToken") ? cookies.get("authToken") : null;
    const isAuthConfirmation=await isAuth();

    try{

      //console.log("want to add");
      if (userId && authToken&& isAuthConfirmation.isAuthentificated ) {
        let {data:res}=await axios.post(
          "/api/users/favorite",
          {
            colorId: articleColorId,
            slug: articleSlug,
            userId: userId,
            category: articleCategory,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken} `,
            },
  
          }
        );
        //console.log(res);
      } else {
        // console.log('redirect normally');
        // document.location = "/login";
      }
    }catch(err){
        // console.log("redirect normally");
        // document.location = "/login";
    }
}

export const getFavorite=()=>async dispatch=>{
  dispatch({ type: TYPES.FAVORITE_LOADING });
    const cookies = new Cookies();


  const { data: favorite} = await axios({
      url:"/api/users/favorite/all",
      method:"POST",
      data:{
        userId:atob(cookies.get("authId")),
      },
      headers: {
        Authorization: `Bearer ${cookies.get("authToken")}`,
      },
  }
  );
  // const { data: favorite } = await axios.post("/api/users/favorite/all");

  //console.log(favorite);
  if (favorite.found) {
    dispatch({
      type: TYPES.FAVORITE_LOADING_SUCCESS,
      payload: [...favorite.items],
    });
  } else {
    dispatch({ type: TYPES.FAVORITE_LOADING_ERROR });
  }
}

export const deleteFromFavorite=(slug,colorId)=>async (dispatch)=>{
    const cookies = new Cookies();
  
  try{
    const { data: res } = await axios({
      url: "/api/users/favorite",
      method: "delete",
      data: {
        userId: atob(cookies.get("authId")),
        slug,
        colorId,
      },
      headers: {
        Authorization: `Bearer ${cookies.get("authToken")}`,
      },
    });
    //console.log(res);


    if(res.status==200){
      dispatch(getFavorite());
      // dispatch({action:TYPES.FAVORITE_LOADING_SUCCESS})
    }else{
      dispatch({action:TYPES.DELETE_FROM_FAVORITE_ERROR})
    }
  } catch(err){
    

  }

}