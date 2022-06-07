import React from 'react';
import {Swiper , SwiperSlide} from 'swiper/react';
import {Navigation, EffectFade,Autoplay, Pagination} from "swiper";
// import l1 from "../../../assets/images/slider/1/l.jpg"
// import m1 from "../../../assets/images/slider/1/m.jpg"
// import l2 from "../../../assets/images/slider/2/l.webp";
// import m2 from "../../../assets/images/slider/2/m.webp";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';
import SliderItem from './SliderItem';

const parDir='../../../assets/images/slider'
const l1RelativePath="/1/l.jpg"
const m1RelativePath="/1/m.jpg"
const l2RelativePath="/2/l.webp"
const m2RelativePath="/2/m.webp"

const sliderItems = [
  {
    title: "Joue à la perfection",
    imageM: parDir + m1RelativePath,
    imageL: parDir + l1RelativePath,
    desc: "Ameliore tous les aspects de ton jeu avec le niveau Pick Diamond. Soyez toujours à la page avec BAB SPORTS",
    btnLabel: "Souscrire",
    link: "#",
  },

  {
    title: "QUALITE/PRIX",
    imageM: parDir + m2RelativePath,
    imageL: parDir + l2RelativePath,
    desc: "Le materiel de sport et tous les accesiores meilleur prix trié pour vous. Avec nous voyez port d'un autre oeil!",
    btnLabel: "Souscrire",
    link: "#",
  },
];

function MainSlider() {
  return (
    <div className='mainslider'>
        <Swiper
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
                delay:8000,
                disableOnInteraction:false
            }}
            height={500}
            effect={"fade"}
            pagination={
              {
                clickable:true
              }
            }
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            className="mySwiper"
        >
          {
            sliderItems.map((element, idx)=>(

              <SwiperSlide key={idx}>
                <SliderItem element={element}/>
              </SwiperSlide> 
            ))
          }

        </Swiper>

    </div>
  )
}

export default MainSlider