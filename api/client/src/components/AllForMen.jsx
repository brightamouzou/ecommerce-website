import React, { useEffect } from 'react'
import AllForBrand from './AllForBrand'
import Category from "./MainOptions/Category"
import {useDispatch, useSelector} from "react-redux"
import {loadAll, loadMen} from "../redux/actions/allCategories"
import ArticleCategoryList from './ArticleCategoryList'


function AllForMen() {

  const dispatch=useDispatch();
  const menShoes=useSelector(state=>state.menShoes);
  useEffect(()=>{
    dispatch(loadMen("shoes"));

    console.log(menShoes);
  },[])
  return (
    <div className='allFor allFor--men'>
      <AllForBrand src={""}/>

      {
        menShoes.all?(
          <div className="items">
            <ArticleCategoryList articles={menShoes.all}/>
          </div>

        ):(
              <div>Aucun article trouvé</div>
        )
      }
      imtes
    </div>
  )
}

export default AllForMen;