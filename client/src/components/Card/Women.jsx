import React from 'react'
import ModelCard from './Model';
import women_medium from "../../assets/images/women/m.jpeg"
import women_large from "../../assets/images/women/l.webp"
import { Link } from 'react-router-dom';

function ShopForWomen() {
  return (
    <div className="shopFor ShopForWomen">
      <Link to={"/articles/women"}>
        <ModelCard medium={women_medium} large={women_large} desc="Femmes" />
      </Link>
    </div>
  );
}

export default ShopForWomen;