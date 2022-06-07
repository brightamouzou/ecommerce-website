import React from "react";
import ContactUs from "./ContactUs";
import NewsLetter from "./NewsLetter";
import SocialMedias from "./SocialMedias";

const Footer = () => {
  function onClickHandler(e){
    console.log(e.target.parentElement.classList[0]);
    const parent = document.querySelector(`.${e.target.parentElement.classList[0]}`);
    const svg=parent.querySelector("button svg")
    const ul = parent.querySelector("ul");
    if(ul.classList.contains("visible"))
      svg.style.transform = "rotate(0deg)";
    else
      svg.style.transform = "rotate(45deg)";


    if (ul){
      console.log(ul);
      ul.classList.toggle("visible")
    }
  }

  function onSvgClick(e){
      // e.target.parentNode.click();
      console.log("uss");
      console.log(e.target.closest("button"));
      e.target.closest("button").click()
  }
  return (
    <div className={`footer ${window.innerWidth <= 960 && "footer__mobile"}`}>
      <div className="footer__items">
        <ContactUs  unrollSvgClick={onSvgClick} onClickHandler={onClickHandler} />
        <SocialMedias  unrollSvgClick={onSvgClick} onClickHandler={onClickHandler} />
        <NewsLetter onClickHandler={onClickHandler} />
      </div>

      <div className="signature">
        <hr />
        © 2022 Bab Itech - Tous droits reservés
      </div>
    </div>
  );
};

export default Footer;
