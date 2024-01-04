import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ModalContext } from '../contexts/Modal';
import { deleteFromFavorite as deleteFromFavoriteAction } from "../redux/actions/user";

function FavoriteItem({item}) {
  const [completeItem,setCompleteItem]=useState({});
  const dispatch=useDispatch();
  const modalContextSetter=useContext(ModalContext);
  function deleteFromFavorite(){
    modalContextSetter(null, null, null, null, true,null,null,"Veuillez patienter");
    dispatch(deleteFromFavoriteAction(item.slug,item.colorId));
    modalContextSetter(null, null, null,null,false);

  }
  
  useEffect(() => {
    async function fetchItemCompletly(){
      const { colorId, category, slug } =  item;
      let { data: res } = await axios.get(
        `api/articles/slugandcolor/${category}/${slug}/${colorId}`
      );

      //console.log(res);
      if(res.found){
          setCompleteItem({...res.item})
      }

    } 
    fetchItemCompletly();
    // let colors=ArticleColorsFetching(colorId,category,slug);
    //console.log(item);
  }, []);
  return completeItem && completeItem.colorObject ? (
    <div className="item cartItem">
      <div className="itemImage">
        <Link
          to={`/articles/${item.category}/${item.slug}/${item.colorId}`}
          exact
        >
          <img src={completeItem.colorObject.images.default} alt="" />
        </Link>
      </div>
      <div className="itemDesc">
        <h4 className="itemDesc__name">{completeItem.name}</h4>
        <div className="itemDesc__category">{item.category}</div>
        <div className="itemDesc__color">
          {completeItem.colorObject.colorName}
        </div>
        <div className="t-warning ">{completeItem.price / 100}$</div>

        <div className="buttons m2">
          <button className="isDark">
            <Link to={`/articles/${item.category}/${item.slug}/${item.colorId}`}>
              Ajouter au panier
            </Link>
          </button>
          <button className="isDark" onClick={deleteFromFavorite}>
            Supprimer des favoris
          </button>
        </div>
      </div>
    </div>
  ) : (
    <CircularProgress/>
  );
}

export default FavoriteItem