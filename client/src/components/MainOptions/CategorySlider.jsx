import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import CategoryItem from './CategoryItem';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import More from "../More";
import LoadingSomeWhere from "../LoadingSomeWhere"

const CategorySlider = ({ items, linkForMore}) => {
  const [screenWidth, setScreenWidth] = useState(document.body.offsetWidth)
  const [slidesPerView, setSlidesPerView] = useState(document.body.offsetWidth)
  const [isLoading, setIsLoading]=useState(true);
  // screenWidth.current = document.body.offsetWidth


  useEffect(()=>{
    // console.log(items);
    setIsLoading(false)
  },[])


  window.onresize = () => {
    setScreenWidth(document.body.offsetWidth)
    setSlidesPerView(
      screenWidth > 1200 ? (
        4.5
      ) : screenWidth > 910 ? (
        3.5
      ) : screenWidth > 610 ? (
        2.5
      ) : (
        1.5
      )
    )
  }


  return (
    <>
      {isLoading ? (
        <LoadingSomeWhere />
      ) : (
        <Swiper
          slidesPerView={
            window.innerWidth > 1200
              ? 4.5
              : document.body.offsetWidth > 910
              ? 3.5
              : document.body.offsetWidth > 610
              ? 2.5
              : 1.5
          }
          loop={false}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <CategoryItem item={{...item,currentIndex:0}} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            {items.length && linkForMore && (
              <div className="moreArticles">
                <Link to={linkForMore}>
                  <More />
                </Link>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      )
    }
    </>
  );
  
}

export default CategorySlider;