import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ArticleCategoryList from '../components/ArticleCategoryList';
import MainLoading from '../components/MainLoading';
import AccessoriesShop from './AccessoriesShop';
import ClothesShop from './ClothesShop';
import NotFound from './NotFound';
import ShoesShop from './ShoesShop';

function ArticlesPage(articles) {
    const params=useParams()
    useEffect(()=>{
        // console.log(params);
    })
    return (
      <div>
        <ArticleCategoryList articles={articles}/>
      </div>
    );
}

export default ArticlesPage