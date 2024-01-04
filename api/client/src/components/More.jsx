import React from 'react'
import AddIcon from "@mui/icons-material/Add";

function More({onClick}) {
  return (
    <div className="more" onClick={()=>onClick && onClick()}>
        <div>
            <AddIcon />
        </div>
    </div>
  );
}

export default More