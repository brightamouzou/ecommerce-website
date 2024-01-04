import React, { useContext, useRef, useCallback, useEffect } from "react";
import CategoryItem from './MainOptions/CategoryItem'
import {lastPageStateContext} from "../contexts/lastPageStateContext"
import { useState } from "react";
import { CircularProgress } from "@mui/material";
function ArticleCategoryList({articles}) {
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{

    setTimeout(()=>{
      setIsLoading(false)
    },2000)
  },[])
  const observer=useRef();
  const currentPageState=useContext(lastPageStateContext);
  // //console.log(currentPageState.hasMore);
  const lastArticleRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
          // //console.log("not yet");

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && currentPageState.hasMore) {
          //console.log("is intersecting");
          
          currentPageState.setPage((p) => articles.length);
        }

      });
        if (node) observer.current.observe(node);

    },
    [currentPageState.hasMore]
  );
  return (

    <div className="articleCategoryList">
      {isLoading?(
        <CircularProgress/>
        ):(articles.length) ?articles.map((article, idx) => {
        return idx === articles.length - 1 ? (
          <CategoryItem
            item={article}
            classNames="articleCategoryList__item"
            key={idx}
            ref={lastArticleRef}
          />
        ) : (
          <CategoryItem
            item={article}
            classNames="articleCategoryList__item"
            key={idx}
          />
        );
     
      }):(
        <h3 className="t-center">Acun article trouvé</h3>
      )
    }
    </div>
  );
}

export default ArticleCategoryList