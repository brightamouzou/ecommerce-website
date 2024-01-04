import React, { useEffect } from 'react'
import ShopForOptions from '../ShopForOptions';
import Categorie from './Category';
import testData from "../../utils/testData"
import MainSlider from '../Sliders/MainSlider';
import { useContext } from 'react';
import { ModalContext } from '../../contexts/Modal';
import MobileAppComp from '../MobileAppComp';

const novelties={
  name:"NOUVEAUTÉS",
  items:testData
}


const MainOptions = (props) => {
  const modalContextSetter=useContext(ModalContext);

  
  useEffect(()=>{
    function showMoadal(){
      const modalBodyComonent = function () {
        return (
          <div>
            <h3 className="">Coucou !</h3>
            <p style={{ margin: "10px 0" }}>
              Je me nomme{" "}
              <a
                href="https://instagram.com/bab_fingers"
                rel="noreferrer"
                target={"_blank"}
                style={{ color: "blue" }}
              >
                AMOUZOU Binida Bright
              </a>
              , le developpeur de ce site. En toute volonté j' ai décidé
              d'insérer juste les données necessaires pour vous permettre de
              tester les fonctionnalités du site. La non insertion de certaines
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
              si vous remarquez un potentiel bug
            </p>
            <p>
              <button
                onClick={()=>document.querySelector(".closeIcon").click()}
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
        return(
        <div>
          <button className='bg-success isDark'>Suivez moi !</button>
        </div>
        )
      };
  
      modalContextSetter(
        modalBodyComonent,
        null,
        TopRightComponent,
        null,
        true,
        null,
        null,
        "Bienvenue sur notre site"
      );
    }
    setTimeout(()=>{
      showMoadal()
      
    },4000)

  },[])
  useEffect(()=>{
      // console.log(props.match);
  },[])
  return (
    <div className="mainOptions index">
      <MainSlider/>
       <ShopForOptions/>
       <MobileAppComp/>
      {/* <Categorie name={novelties.name} items={novelties.items}/> */}
    </div>
  )
}

export default MainOptions;