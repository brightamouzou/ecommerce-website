import React, { useEffect } from 'react'
import ShopForOptions from '../ShopForOptions';
import Categorie from './Category';
import testData from "../../utils/testData"
import MainLoading from '../MainLoading';
import MainSlider from '../Sliders/MainSlider';

const novelties={
  name:"NOUVEAUTÉS",
  items:testData
}

const MainOptions = (props) => {

  useEffect(()=>{
      console.log(props.match);
  })
  return (
    <div className="mainOptions index">
      <MainSlider/>
       <ShopForOptions/>
      <Categorie name={novelties.name} items={novelties.items}/>
    </div>
  )
}

export default MainOptions;