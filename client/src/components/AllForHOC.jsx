import React, { useEffect } from 'react';
import AllCategoriesFor from './AllFor';
import {loadAll} from "../redux/actions/allCategories";
import { useDispatch, useSelector} from 'react-redux';

const urls={
  shoes:"",
  clothes:"",
  accessories:"",
}

export const allCategoriesForHOC = AllCategoriesFor=>{

    return (props)=>{
      const dispatch=useDispatch();
      const clothesState=useSelector(state=>state.clothes)

        useEffect(()=>{

        }, [])

      return <AllCategoriesFor/>
    }

}
  
