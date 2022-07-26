import React from 'react'

function FilterItem(props) {
  return (
    <div className='filterItem'>
        <button>
          <label htmlFor={"filterItem"+props.name}>
              <input type="checkbox"  name={props.filterCategory} id={"filterItem"+props.name}/>
              <span>{props.name}</span>
          </label>
        </button> 
    </div>
  )
}

export default FilterItem;