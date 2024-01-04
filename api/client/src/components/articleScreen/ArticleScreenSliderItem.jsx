import React from 'react';
import LazyImage from '../LazyImage';

function ArticleScreenSliderItem({imageUrl}) {
  return (
    <div className="articleScreenSliderItem articleScreenSliderImage">
      <LazyImage url={imageUrl}/>
    </div>
  );
}
export default ArticleScreenSliderItem;