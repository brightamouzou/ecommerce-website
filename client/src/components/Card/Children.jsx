import React from 'react'
import Model from './Model';
import children_medium from "../../assets/images/children/m.webp"
import children_large from "../../assets/images/children/l.webp"
import { Link } from 'react-router-dom';


function ShopForChildren() {
  return (
    <div className='shopFor shopForChildren'>
        <Link to={"/articles/children"}>
            <Model
                medium={children_medium}
                large={children_large}
                desc="Enfants"
            />
        </Link>
    </div>
  )
}

export default ShopForChildren;