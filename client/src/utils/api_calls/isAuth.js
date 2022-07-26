import axios from "axios";
import Cookies from "universal-cookie"
export async function isAuth(){
    const cookies = new Cookies();
    const userId = cookies.get("authId") ? cookies.get("authId") : null;
    const token = cookies.get("authToken") ? cookies.get("authToken") : null;

    const { data: res } = await axios({
      method: "post",
      url: "/api/user-checks",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: JSON.stringify({
        userId: userId,
      }),
    });

    return res
}