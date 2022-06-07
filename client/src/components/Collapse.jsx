import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function Collapse({headerMessage, classNames,children}) {
  return (
    <div className={`collapse ${classNames?classNames:""}`}>
      <button
        className="collapse__header noStyle"
        onClick={(e) => {
          e.target.classList.toggle("collapse__header--unwind");
        }}
      >
        <span>{headerMessage}</span>
        <span>
          <ChevronRightIcon />
        </span>
      </button>
      <div className="collapse__body t-justify">{children}</div>
    </div>
  );
}

export default Collapse;