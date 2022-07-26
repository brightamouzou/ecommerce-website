import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Avatar from "../Avatar";
import {isAuth as isAuthMiddleware} from "../../utils/api_calls/isAuth"
import { useSelector } from 'react-redux';
import LogoutIcon from "@mui/icons-material/Logout";
import {logout as logoutAction} from "../../redux/actions/user"
import { useDispatch } from 'react-redux';

function UserAvatar() {
    const  [isAuth,setIsAuth]=useState(false);
    const dispatch=useDispatch();
    const user=useSelector(s=>s.userState.user)
    useEffect( ()=>{ 

        async function fetchAuth(){
            let res = await isAuthMiddleware();
            if(res.isAuthentificated){
                setIsAuth(true);
            }
        }

        fetchAuth()
        
    },[])

    function logout(){
        dispatch(logoutAction());
    }

  return (
    <div className="userAvatar">
      <Link to={"/dashboard"} className="avatar">
        <Avatar />
      </Link>
      {isAuth && user && (
        <div className="userInfosContainer">
          <div className="userInfos">
            {user.firstName} {user.lastName} <br />
            <button className='isDark logout' onClick={logout}><LogoutIcon/>{" "}Deconnexion</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserAvatar