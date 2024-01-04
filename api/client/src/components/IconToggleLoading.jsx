import React from 'react'
import pumaLogo from "../assets/images/puma-logo.png"

function MainLoading({restricted}) {
  return (
    <div className={`mainLoading ${restricted && "mainLoading--restricted"}`}>
      <div className="logo">
        <img src={pumaLogo} alt="" />
      </div>
    </div>
  );
}

export default MainLoading