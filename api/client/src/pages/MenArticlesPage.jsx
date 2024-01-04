import React, { useState } from 'react'
import { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux"
import MainLoading from '../components/IconToggleLoading';
import Category from '../components/MainOptions/Category';
import {loadAll, loadMen} from "../redux/actions/allCategories"

function MenArticlesPage() {
  const menShoes = useSelector(s=> s.menShoes);
  const menClothes = useSelector((s) => s.menClothes);
  const accessories = useSelector((s) => s.accessories);
  const dispatch=useDispatch();
  const [isLoading, setIsLoading]=useState(false);

  useEffect(()=>{
    setIsLoading(true)
    dispatch(loadAll("accessories"));
    dispatch(loadMen("clothes"));
    dispatch(loadMen("shoes"));
    document.body.classList.add("no-scroll-simple")

    // setTimeout(()=>{
    //   document.body.classList.remove("no-scroll");
    // },5000)
  },[])

  useEffect(()=>{
    if (menClothes.all.length || menShoes.all.length || accessories.all.length) {
      setIsLoading(false);
    }
  
  },[menClothes,menShoes,accessories])

  return (
    <div className="articleFor">
      {isLoading ? (
        <MainLoading />
      ) : (
        <>
          <Category
            name={"Chaussures"}
            items={menShoes.all}
            linkForMore={"/q/articles/shoes?sex=men"}
          />
          <Category
            name={"Vetements"}
            items={menClothes.all}
            linkForMore={"/q/articles/clothes?sex=men"}
          />
          <Category
            name={"Accessoires"}
            items={accessories.all}
            linkForMore={"/q/articles/accessories"}
          />
        </>
      )}
    </div>
  );
}

export default MenArticlesPage