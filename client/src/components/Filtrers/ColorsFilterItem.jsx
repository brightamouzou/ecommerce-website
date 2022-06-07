import React, { useContext } from 'react'
import { filterStateContext } from '../../pages/FilterArticlesPage';
import {allCategoriesFilters, colors} from "../../utils/articleFilterData"


function ColorsFilterItem() {

  const filterState = useContext(filterStateContext);

 function handleChange(event, fieldKey) {
   const { "color": currentFieldKey, ...others } = filterState().state;

   console.log(others);
   if (!event.target.checked) {
     filterState().setter((c) => ({
       ...others,
     }));
   } else {
     // if(allCategoriesFilters[fieldKey]){
     filterState().setter((c) => ({
       ...others,
       "color": fieldKey.toLowerCase(),
     }));
     // }
   }
 }

  return (
    <div className="filterItem filterItem--color">
      <h3>Couleur</h3>
      <ul >
        {Object.keys(colors).map((color,idx) => (
          <li>
            <input style={{display:"none"}} onChange={(e)=>handleChange(e,color)} type="radio" id={`${color}${idx}`} name='color'  />
            <label htmlFor={`${color}${idx}`}>
              <div
                className="colorItem"
                style={{
                  background: colors[color],
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              ></div>
              <small className="colorName">{color}</small>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorsFilterItem