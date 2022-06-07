import React, { useEffect, useState } from 'react'
import LoadingSomeWhere from '../LoadingSomeWhere';
import CategorieSlider from './CategorySlider'

const Category = ({name, items,linkForMore}) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    console.log(items);
    setIsLoading(true)
    if(items.length){
      setIsLoading(false)
    }
  },[items])
  return (
    <div className="category">
      <h2 className="category__title">{name}</h2>

      {
        isLoading?(
          <div style={{position:'relative',zIndex:"6000"}}>
            <LoadingSomeWhere/>
          </div>
        ):(
        <div className="category__items">
          <CategorieSlider items={items} linkForMore={linkForMore} />
        </div>
        )
      }
    </div>
  );
}

export default Category