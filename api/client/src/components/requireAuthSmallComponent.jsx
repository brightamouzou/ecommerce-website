import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { SnackbarContext } from "../contexts/SnackBar";
import { isAuth as isAuthAction } from "../utils/api_calls/isAuth";
const requireAuthSmallComponent=(Component,redirectUrl,successMessage="Opération effectuéee avec succès")=>{
    return (props) => {
    const snackBarAlertSetter = useContext(SnackbarContext);
        const history=useHistory();
        async function checkAuth(){
            const isAuth = await isAuthAction();

            if(!isAuth.isAuthentificated && redirectUrl){
                history.push({
                    pathname:"/login",
                    search:`?redirectUrl=${redirectUrl}`
                })

            }else if(successMessage){
                snackBarAlertSetter(
                    successMessage,
                    true,
                    2000,
                    "success"
                );
            }
        }

        return(
        <span onClick={checkAuth}>

            <Component {...props}/>
        </span>
        )


    };
}

export default requireAuthSmallComponent;