import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

export const Star = ({ check, oncLick }) => {
  return (
    <span className={`star ${check ? "starChecked" : ""}`} onClick={()=>oncLick && oncLick()}>
      <StarIcon />
    </span>
  );
};
function StarProduct() {
    const [numberOfStars,setNumberOfStars]=useState(0);
  return (
    <div className='starProduct'>
        {
            Array.from({length:5}).fill(0).map((_, idx)=>(
                <Star oncLick={()=>()=>setNumberOfStars(idx+1)} check={idx+1<=numberOfStars}/>
            ))
        }
    </div>
  )
}

export default StarProduct