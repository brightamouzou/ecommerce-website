import React from 'react';
import LazyImage from '../LazyImage';

function ArticleScreenSliderItem({imageUrl}) {
  console.log('url',imageUrl );
  return (
    <div className="articleScreenSliderItem articleScreenSliderImage">
      <LazyImage url={imageUrl}/>
    </div>
  );
}
export default ArticleScreenSliderItem;