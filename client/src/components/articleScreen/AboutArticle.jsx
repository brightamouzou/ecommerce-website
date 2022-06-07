import Collapse from "../Collapse";
import React, { useEffect } from "react";
import AddTo from "../AddTo";
import ArticleColorsView from "./ArticleColorsView";
import WrapperBox from "../WrapperBox";
import Stars from "../Stars";
import ArticleColorsFetching from "../ArticleColorsFetching";

function AboutArticle({ article }) {
  let colorsObjects;
  try{

    colorsObjects = ArticleColorsFetching(
      article.colors,
      article.category,
      article.slug
    ).colorsObjects;

    console.log(colorsObjects);
  }catch(err){
    console.log(err.message);

    // return
  }

  useEffect(()=>{
      const pageContainer=document.querySelector(".articleScreen");
      const aboutArticleTitle = document.querySelector(".aboutArticle__title");

      // if(window.innerWidth<960)
      // pageContainer.insertBefore(aboutArticleTitle,pageContainer.children[0])
      

  },[window.innerWidth])



  return (
    <div className="aboutArticle">
      {colorsObjects ? (
        <WrapperBox>
          <div className="aboutArticle__title">
            <h2 className="aboutArticle__title__name">
              {article.name}
            </h2>
            <div className="aboutArticle__title__category">
              {article.category} {article.sex}
            </div>
            <div className="aboutArticle__title__price">
              {article.price.toString().slice(0, -2) +","+ article.price.toString().slice(-3,-1)}{" "}
              $
            </div>
          </div>
          <div className="aboutArticle__colorsView">
            <ArticleColorsView colors={colorsObjects} />
          </div>

          <div className="aboutArticle__availableSizes sizeSelect"></div>

          <div className="addToComponents">
            <AddTo />
          </div>

          <div className="description">
            <Collapse headerMessage={"Description"}>{article.description}</Collapse>
          </div>

          <div className="stars">
            <Collapse headerMessage={"Avis (14 votes)"}>
              <Stars starsNumber={4.2} />
            </Collapse>
          </div>
        </WrapperBox>
      ) : (
        <div>rien</div>
      )}
    </div>
  );
}

export default AboutArticle;
