import React, { useContext } from 'react'
import { useParams, withRouter } from 'react-router-dom';
import { filterStateContext } from '../../pages/FilterArticlesPage';
import {allCategoriesFilters,specificCategoriesSubCategories} from "../../utils/articleFilterData"
import ColorsFilterItem from './ColorsFilterItem';
import FilterItem from './FilterItem'


function ArticlesFilters() {
  const {category}=useParams();
  const filterState = useContext(filterStateContext);

 function handleChange(event, fieldKey) {
   const { "subCategories": currentFieldKey, ...others } = filterState().state;

   console.log(others);
   if (specificCategoriesSubCategories[category][fieldKey]==="") {
     filterState().setter((c) => ({
       ...others,
     }));
   } else {
     // if(allCategoriesFilters[fieldKey]){
     filterState().setter((c) => ({
       ...others,
       "subCategories": specificCategoriesSubCategories[category][fieldKey],
     }));
     // }
   }
 }
  return (
    <div className="articlesFilter">
      <div className='filterItem'>
        <ul className="links ">
          <h3>Sous-categorie</h3>
          {category &&
            Object.keys(specificCategoriesSubCategories[category]).map(
              (subCategory, idx) => (
                <li className="">
                  <input
                    type="radio"
                    name="subcategory"
                    onChange={(e) => handleChange(e, subCategory)}
                    id={`${subCategory}${idx}`}
                  />
                  <label htmlFor={`${subCategory}${idx}`}>
                    <div>{subCategory}</div>
                  </label>
                </li>
              )
            )}
        </ul>

      </div>

      <div className="filterItems">
        {Object.keys(allCategoriesFilters).map((filterFieldsKey) => (
          <FilterItem
            key={allCategoriesFilters[filterFieldsKey].name}
            filterFields={allCategoriesFilters[filterFieldsKey]}
            categoryName={filterFieldsKey}
          />
        ))}

        <ColorsFilterItem />
      </div>
    </div>
  );
}

export default withRouter(ArticlesFilters)