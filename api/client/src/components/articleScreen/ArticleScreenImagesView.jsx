import React from 'react'
import { SwiperSlide } from 'swiper/react'
import ArticleScreenSliderWrapper from './ArticleScreenSlider copy'
import ArticleScreenSliderItem from './ArticleScreenSliderItem';

function ArticleScreenImagesView({otherViewImages}) {
  return (
    <div className="articleScreenImagesView">
      <ArticleScreenSliderWrapper>
        {otherViewImages.map((imageUrl, idx) => (
          <>
            <SwiperSlide key={idx}>
              <ArticleScreenSliderItem imageUrl={imageUrl} />
            </SwiperSlide>
          </>
        ))}
      </ArticleScreenSliderWrapper>
      <div className="articleScreenImagesView__Mobile">

        {otherViewImages.map((imageUrl, idx) => (
          <>
            <ArticleScreenSliderItem imageUrl={imageUrl} key={idx} />
          </>
        ))}
      </div>
    </div>
  ); 
}

export default ArticleScreenImagesView;