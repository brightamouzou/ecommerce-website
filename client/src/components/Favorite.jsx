import React,{ useEffect, useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Favorite({props}) {
  const {isLikedProp, likeFunction}={props}
  const [isLiked, setIsLiked]=useState(false)
  useEffect(()=>{
    setIsLiked(isLikedProp)
  }, [props])
  // const [liked, setClicked]=useState(false)
  return (
    <div className='favorite'>
      {
        
          <span onClick={()=>setIsLiked(v=>!v)}>
            {
              isLiked?(
                <FavoriteIcon/>          
              ):(
                <FavoriteBorderIcon/>

              )
            }
            
          </span>
    
      }
    </div>
  )
}

export default Favorite;