import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import {filterStateContext} from "../../pages/FilterArticlesPage"
import ArticleCategoryList from '../ArticleCategoryList'
import LoadingSomeWhere from '../LoadingSomeWhere'

function FiltredArticles({articles}) {
  const filterState=useContext(filterStateContext)

  const [filtredArticles,setFiltredArticles]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  useEffect(()=>{
    setIsLoading(true)
    setFiltredArticles({...articles})
    console.log(articles);

    setIsLoading(false)
  },[articles])
  
  useEffect(()=>{
    console.log(filterState().setter);
  },[])
    
  return (
    <div className='filtredArticles'>
      {
        isLoading?(
          <LoadingSomeWhere/>
        ):(filtredArticles.length&&(
          <ArticleCategoryList articles={filtredArticles}/>
        ))
      }
      {/* <button onClick={()=>filterState().setter(c=>({...c,"a":5}))} >Click</button> */}
    </div>
  )
}

export default FiltredArticles