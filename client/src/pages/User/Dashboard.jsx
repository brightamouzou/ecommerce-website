import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import requireAuthComponent from '../../components/RequireAuthComponent';
import DashboardContent from './DashboardContent';
import DashboardSideBar from './DashboardSideBar';

function Dashboard() {
    const userState=useSelector(s=>s.userState);
    function handleScroll(e){
    }

    useEffect(()=>{
      const sideBarToggleButton = document.querySelector(
        ".dashboard .drawer button"
      );
      const offsetTop = sideBarToggleButton.closest(".sideBar").offsetTop;
      let h3 = document.createElement("h3");
      h3.innerText = "Profil";
      sideBarToggleButton.insertAdjacentElement("beforeend", h3);

      document.body.onscroll = (e) => {
        if (window.pageYOffset > offsetTop) {
          sideBarToggleButton.closest(".sideBar").classList.add("fixed");
          sideBarToggleButton.closest(".sideBar").style.top = 0;
        } else if (window.pageYOffset < offsetTop) {
          sideBarToggleButton.closest(".sideBar").classList.remove("fixed");
        }
      };
    },[])
    
  return userState?.user ? (
    <div className="dashboard dashboard__user" onScroll={handleScroll}>
      <div className="brand">
        <h2 className="">
          Bienvenue {userState.user.firstName}! Retrouvez ici la trace de tous toutes vos activités
          BABSHOP
        </h2>
      </div>

      <div className="sideBar">
        <DashboardSideBar />
      </div>
      <div className="content">
        <DashboardContent />
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default requireAuthComponent(Dashboard,"dashboard"); 