import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LazyImage from "../components/LazyImage";
import AboutArticle from "../components/articleScreen/AboutArticle";
import ArticleScreenImagesView from "../components/articleScreen/ArticleScreenImagesView";
import testData from "../utils/testData"
import axios from "axios";
import MainLoading from "../components/IconToggleLoading";
import NotFound from "./NotFound";
import PageContainer from "../components/PageContainer";
import { fetchData } from "../utils/api_calls/fethingArticleColor";

function ArticleScreen(props) {
  const { colorId, articleSlug,category} = useParams();
  const [currentArticle, setCurrentArticle]=useState({});
  const [isLoading, setIsLoading]=useState(false);
  const [error, setError]=useState(false);
  const element=testData[0];
  /*
  async function fetchData(){
    setIsLoading(true);
    try{
      const {data}=await axios.get(`/api/articles/slugandcolor/${category}/${articleSlug}/${colorId}`);
      if(data && data.found){
        console.log(data);
        setCurrentArticle({...data.item})
        setIsLoading(false);
      }else{
        Promise.reject("Erreur");
      }
    }catch(err){
      console.log(err.message);
      setIsLoading(false);
      setError(true);
    }

  }*/

  async function fetchCurrentColorData(){
    try{
        setIsLoading(true);
      const data = await fetchData(category, articleSlug, colorId);
      if (data) {
        setIsLoading(false)
        document.title=articleSlug
        setCurrentArticle(data);
      }else{
        new Promise.reject("Erreur");
      }
    }catch(err){
      setIsLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchCurrentColorData();
    //Call the api with the ids to access infos about the product
 
  }, [window.location.pathname]);

  return (
      
      // <PageContainer>
      <>
        {
          isLoading ? (
            <MainLoading />
          ) : error ? (
            <NotFound />
          ) : currentArticle.colorObject && (
            <div className="articleScreen">
              <ArticleScreenImagesView
                otherViewImages={currentArticle.colorObject.otherViewImages}
              />
        
              {<AboutArticle article={currentArticle} />}
            </div>
          )
        
        }
      </>
      // </PageContainer>
      
  )
}

export default ArticleScreen;
