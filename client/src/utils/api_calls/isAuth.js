import axios from "axios";
import Cookies from "universal-cookie"
export async function isAuth(){
    const cookies = new Cookies();
    const userId = cookies.get("authId") ? cookies.get("authId") : null;
    const token = cookies.get("authToken") ? cookies.get("authToken") : null;

    if(userId && token){
       const { data: res } = await axios.post(
         "/api/user-checks",
         {
           userId:atob(userId),
         },
         {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }
       );
      return res;

    }else{
      return {}
    }

}