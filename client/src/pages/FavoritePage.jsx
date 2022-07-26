import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import requireAuthComponent from '../components/RequireAuthComponent';
import Cookies from "universal-cookie";
import { useDispatch } from 'react-redux';
import {getFavorite} from "../redux/actions/user"
import FavoriteItem from '../components/FavoriteItem';
import MainLoading from '../components/IconToggleLoading';

function FavoritePage() {
    const {favorite,isLoadingFavorite} = useSelector((s) => s.userState);
    const [isLoading,setIsLoading]=useState(false)
    const dispatch=useDispatch();
    const cookies = new Cookies();
    console.log();
    useEffect(()=>{
      setIsLoading(true)
      dispatch(getFavorite());
      setIsLoading(false);
    },[])
  return (
    <div className="favoritePage">
      <div className="cart cartPage">
        <h3>Vos favoris</h3>

        <div className="cartItems">
          {isLoading || isLoadingFavorite ? (
            <MainLoading />
          ) : favorite.length ? (
            favorite.map((ele) => {
              return <FavoriteItem item={ele} />;
            })
          ) : (
            "Aucun favori"
          )}
        </div>
      </div>
    </div>
  );
}

export default requireAuthComponent(FavoritePage,"favorite")