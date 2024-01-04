import React from 'react'
import pumaLogo from "../assets/images/puma-logo.png"

function MainLoading() {
  return (
    <div className="mainLoading">
      <div class="linesContainer">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
        <div class="line line4"></div>
      </div>
      <br />
      <div className="logo">
        <img src={pumaLogo} alt="" />
      </div>
    </div>
  );
}

export default MainLoading