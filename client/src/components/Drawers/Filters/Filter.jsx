import React from 'react'
import FilterItem from './FilterItem'

function Filter(props) {
  return (
    <div className='filter filterCheckBox'>
        <div className="filter__header">{props.filterCategory}</div>
        <div className="filter__items">
            {
                props.items.map(item=>(
                  <FilterItem 
                    filterCategory={props.filterCategory} 
                    filterItemName={item} 
                  />
                ))
            }
        </div>
    </div>
  )
}

export default Filter