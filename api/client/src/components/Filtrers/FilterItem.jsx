import React, { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {filterStateContext} from "../../pages/FilterArticlesPage"
import {allCategoriesFilters,specificCategoriesSubCategories,specificCategoriesAvailablesSizes} from "../../utils/articleFilterData"


function FilterItem({ categoryName, filterFields }) {

  const filterState = useContext(filterStateContext);

  function handleChange(event,fieldKey) {

    const { [categoryName]: currentFieldKey, ...others } = filterState().state;

    if (allCategoriesFilters[categoryName].items[fieldKey] === "") {
      filterState().setter((c) => ({
        ...others,
      }));
    } else {
      // if(allCategoriesFilters[fieldKey]){
      filterState().setter((c) => ({
        ...others,
        [categoryName]: allCategoriesFilters[categoryName].items[fieldKey],
      }));
      // }
    }
    }
  return (
    <div className="categoryFilter filterItem">
      <h3>{filterFields.name}</h3>
      <div className="fields">
        <ul>
          {Object.keys(filterFields.items).map((field, idx) => {
            let id=`${field}${Date.now()}${Math.random()}`
            return (
              <li key={idx}>
                <input
                  onChange={(e) => handleChange(e, field)}
                  type="radio"
                  name={categoryName}
                  value="men"
                  id={id}
                />
                <label htmlFor={id}>
                  <div role={"button"} className="noStyle">
                    {field}
                  </div>
                </label>
                <br />
              </li>
            );
          })}

        </ul>
      </div>
    </div>
  );
}

export default FilterItem