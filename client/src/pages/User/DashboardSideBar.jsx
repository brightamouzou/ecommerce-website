import React from 'react'
import WrapperTemplate from '../../components/Drawers/Wrapper';
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout as logutDispatch} from "../../redux/actions/user";

function DashboardSideBar() {
    const  user=useSelector(s=>s.userState.user)
    const dispatch=useDispatch();
    function logout(){
        dispatch(logutDispatch());
    }

    useEffect(()=>{
        // console.log(user);
    },[])
    return (
      <WrapperTemplate TogglerIcon={MenuOpenIcon}>
        <div className="userInfos">
          <figure className="avatar">
            <img src="assets/images/avatar.jpg" alt="user avatar" />
            <caption>
              {user.firstName}
              {" "}
              {user.lastName}
              <br />
              <em>{user.email}</em>
            </caption>
            <button className="btn isDark" onClick={logout}>Se deconnecter</button>
          </figure>
        </div>
      </WrapperTemplate>
    );
}

export default DashboardSideBar