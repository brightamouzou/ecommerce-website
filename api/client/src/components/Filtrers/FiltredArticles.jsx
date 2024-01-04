import React, {useEffect } from "react";
import { useState } from "react";
import ArticleCategoryList from "../ArticleCategoryList";
import LoadingSomeWhere from "../LoadingSomeWhere";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function FiltredArticles({ articles }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
  }, [articles]);

  function toggleFilterMenu() {
    const filtersMenuBar = document.querySelector(".articlesFilter");
    filtersMenuBar.classList.toggle("hide");
      let filtredArticles=document.querySelector(".filtredArticles");

      if(![...filtersMenuBar.classList].includes("hide")){
        // console.log(filtredArticles);
        document.querySelector(".filterArticlePage").style.overflow="auto";
        filtredArticles.style.minWidth=`${filtredArticles.clientWidth+250}px`;
        filtredArticles.style.overflow=`auto`;
        filtredArticles.closest("body").style.overflow = "auto";
      }else{
        filtredArticles.style.minWidth=`initial`;
        filtredArticles.style.overflowX= `hidden`;
        filtredArticles.closest("body").style.overflowX = "hidden";
      }
  }
  useEffect(() => {
    const filtersMenuBar = document.querySelector(".articlesFilter");
    if(window.innerWidth<960){
      filtersMenuBar.classList.add("hide");
      document.querySelector(".filterArticlePage").classList.remove("scrollX");
    }


  }, []);


  return (
    <div className="filtredArticles">
      <div className="filterOptions">
        <div className="filterOptions__toogleFilters m5">
            <button onClick={toggleFilterMenu}>
              <MenuOpenIcon /> <h3 >Filtres</h3>
            </button>
        </div>
      </div>
      {isLoading ? (
        <LoadingSomeWhere />
      ) : (
        articles && <ArticleCategoryList articles={articles} />
      )}
      {/* <button onClick={()=>filterState().setter(c=>({...c,"a":5}))} >Click</button> */}
    </div>
  );
}

export default FiltredArticles;
