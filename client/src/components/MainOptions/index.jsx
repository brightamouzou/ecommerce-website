import React, { useEffect } from 'react'
import ShopForOptions from '../ShopForOptions';
import Categorie from './Category';
import testData from "../../utils/testData"
import MainSlider from '../Sliders/MainSlider';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/Modal';
import MobileAppComp from '../MobileAppComp';

const novelties = {
  name: "NOUVEAUTÉS",
  items: testData
}


const MainOptions = (props) => {
  const modalContextSetter = useContext(ModalContext);
  function showMoadal() {
    const modalBodyComponent = function () {
      return (
        <div>
          <h3 className="">Coucou !</h3>
          <p style={{ margin: "10px 0" }}>
            Je suis {" "}
            <a
              href="https://www.linkedin.com/in/binida-bright-amouzou-449a89217/"
              rel="noreferrer"
              target={"_blank"}
              style={{ color: "blue" }}
            >
              AMOUZOU Binida Bright
            </a>
            , le developpeur de ce site. De plein gré j' ai décidé
            d'alimenter uniquement le site avec les donneés nécessaires pour permettre de
            d'explorer ses fonctionnalités. La non insertion de certaines
            données est donc intentionnelle. Merci de votre attention.
            Je vous souhaite une merveilleuse expérience sur ce site et
            n'hesitez pas à me faire{" "}
            <a
              href="https://wa.me/90443461"
              rel="noreferrer"
              target={"_blank"}
              style={{ color: "blue" }}
            >
              un retour
            </a>{" "}
          </p>
          <p>
            <button
              onClick={() => document.querySelector(".closeIcon").click()}
              style={{ background: "" }}
              className="bg-success isDark"
            >
              Ok compris!
            </button>
          </p>
        </div>
      );
    };
    const TopRightComponent = function () {
      return (
        <div>
          <button className='bg-success isDark'>Suivez moi !</button>
        </div>
      )
    };

    modalContextSetter(
      modalBodyComponent,
      null,
      TopRightComponent,
      null,
      true,
      null,
      null,
      "Bienvenue sur notre site"
    );
  }

  useEffect(() => {

    setTimeout(() => {
      const modalAlreadyShowed = localStorage.getItem("modalAlreadyShowed");

      if(!modalAlreadyShowed){
        showMoadal()
        localStorage.setItem('modalAlreadyShowed','true');
      }

    }, 4000)

  }, [])
  useEffect(() => {
    // console.log(props.match);
  }, [])
  return (
    <div className="mainOptions index">
      <MainSlider />
      <ShopForOptions />
      <MobileAppComp />
      {/* <Categorie name={novelties.name} items={novelties.items}/> */}
    </div>
  )
}

export default MainOptions;