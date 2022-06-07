import React from 'react'
import men_medium from "../../assets/images/men/m.webp"
import men_large from "../../assets/images/men/l.webp"
import ModelCard from './Model';
import { Link } from 'react-router-dom';
function ShopForMen() {
  return (
    <div className="shopFor shopForMen">
      <Link to={"/articles/men"}>
        <ModelCard
          medium={men_medium}
          large={men_large}
          desc="Hommes"
          link={"/articles/men"}
        />
      </Link>
    </div>
  );
  
}

export default ShopForMen;