import axios from 'axios';
import React, { useLayoutEffect } from 'react'
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ArticleColorsFetching from '../ArticleColorsFetching';
import Favorite from '../Favorite'
import LazyImage from '../LazyImage';
import { addToFavorite } from '../../redux/actions/user';

const CategoryItem =  React.forwardRef(({ item, classNames, ...others },ref) => {
  const [localItem, setLocalItem] = useState();
  const [otherColors, setOtherColors] = useState([]);
  const dispatch = useDispatch();
  // let colors=ArticleColorsFetching(item.colors,item.category,item.slug);
  useEffect(() => {
    setLocalItem({ ...item, currentIndex: 0 });

    const colors = Promise.all(
      item.colors.map(async (color) => {
        return axios
          .get(
            `/api/articles/slugandcolor/${item.category}/${item.slug}/${color["colorId"]}`
          )
          .catch((e) => null);
      })
    );

    colors
      .then((res) => {
        // console.log(res);
        // setLocalItem(res);

        try {
          let colorsObjects = [];
          [...res].forEach((ele) => {
            if (ele.data && ele.data.item) {
              colorsObjects.push(ele.data.item.colorObject);
            }
          });
          // console.log(colorsObjects);

          setLocalItem((c) => ({
            ...c,
            colorsObjects: colorsObjects.slice(),
          }));
        } catch (err) {
          console.log(err.message);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [item]);

  function changeCurrentImage(idx) {
    setLocalItem((c) => ({ ...c, currentIndex: idx }));
  }

  function addToFavorites() {
    dispatch(
      addToFavorite(
        localItem.colorsObjects[localItem.currentIndex].currentColorId,
        localItem.slug,
        localItem.category
      )
    );
      
  }

  return localItem &&
    localItem.colorsObjects &&
    localItem.colorsObjects.length ? (
    <div
      className={`categoryItem ${classNames && classNames}`}
      ref={ref}
    >
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

        <div className="categoryItem__price">{localItem.price/100} €</div>

        <div className="categoryItem__AddToFavoris" onClick={addToFavorites}>
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
});

export default CategoryItem;