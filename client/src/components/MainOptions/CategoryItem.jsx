import axios from 'axios';
import React, { useLayoutEffect } from 'react'
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleColorsFetching from '../ArticleColorsFetching';
import Favorite from '../Favorite'
import LazyImage from '../LazyImage';

const CategoryItem = ({ item, classNames }) => {
  const [localItem, setLocalItem] = useState();
  const [otherColors,setOtherColors]=useState([]);
  // let colors=ArticleColorsFetching(item.colors,item.category,item.slug);
  useEffect(() => {
    setLocalItem({...item, currentIndex:0})

    const colors=Promise.all(item.colors.map(async colorId=>{
      return axios.get(`/api/articles/slugandcolor/${item.category}/${item.slug}/${colorId}`).catch(e=>null)
    }))

    colors.then(res=>{
      console.log(res);
      // setLocalItem(res);

      setLocalItem(c=>({...c, colorsObjects:[...res].map(ele=>ele.data.item.colorObject)}))

    }).catch(e=>{
      console.log(e.message);
    })
  }, [])

  function changeCurrentImage(idx) {
    setLocalItem(c => ({ ...c, currentIndex:idx }))
  }

  return localItem && localItem.colorsObjects ? (
    <div className={`categoryItem ${classNames && classNames}`}>
      <div className="categoryItem__img">
        <Link
          to={`/articles/${localItem.category}/${localItem.slug}/${
            localItem.colorsObjects[localItem.currentIndex].currentColorId
          }`}
        >
          <LazyImage
            url={localItem.colorsObjects[localItem.currentIndex].images.default}
          />
          {/* <img
            src={localItem.images.default}
            alt=""
          /> */}
        </Link>

        <div className="categoryItem__price">{localItem.price} €</div>

        <div className="categoryItem__AddToFavoris">
          <Favorite isLiked={false} />
        </div>
        {localItem.isNew && <div className="isNew"></div>}
      </div>
      <div className="categoryItem__desc">
        <div className="categoryItem__desc__otherImages">
          <small>{localItem.colorsObjects.length} couleurs</small>
          {localItem.colorsObjects.map((color, idx) => (
            <span
              key={idx}
              className={`${
                idx === localItem.currentIndex && "activeCategoryItem"
              } categoryItemColor`}
            >
              <LazyImage
                url={color.images.small}
                alt={item.name + color.colorName}
                onClick={() =>
                  function () {
                    return changeCurrentImage(idx);
                  }
                }
              />

              {/* <img src={color.images.small} alt="" /> */}
            </span>
          ))}
        </div>
        <div>
          <div className="categoryItem__desc__name">{localItem.name}</div>
          <div className="categoryItem__desc__category">
            {localItem.category}
          </div>
        </div>
      </div>
    </div>
  ) : (
    // <div>rien</div>
    <div></div>
  );
  // <div></div>
}

export default CategoryItem;