import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import LazyImage from "../LazyImage";

function ArticleColorsView({ colors }) {
  
  const [newLocation, setNewLocation]=useState("");
  useEffect(() => {
    const reg = /(.*)\//g;
    const location = window.location.pathname;
    setNewLocation(c=>reg.exec(location)[1]);
  },[]);

  useEffect(() => {});
  return (
    <div className="articleColorsView">
      {colors.map(({ images: { small }, currentColorId }, idx) => (
        <div className="articleColorView">
          <NavLink
            to={newLocation&&newLocation+ "/"+currentColorId}
            exact
            activeClassName="colorView-active"
          >
            <LazyImage url={small} />
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default ArticleColorsView;
