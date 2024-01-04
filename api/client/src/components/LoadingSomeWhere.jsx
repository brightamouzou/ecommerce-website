import React from 'react'
import CircularProgress from "@mui/material/CircularProgress";

function LoadingSomeWhere() {
  return (
    <div className='loadingSomewhere' style={{width:'100%',justifyContent:"center",alignItems:'center',textAlign:"center"}}>
        <CircularProgress/>
    </div>
  )
}

export default LoadingSomeWhere