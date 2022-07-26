import React from 'react'


//Checkbox
function Item(props) {
  return (
    <div className="articlesDrawer__itemContainer itemForCheckbox">
        <div className="articlesDrawer__itemContainer__header" aria-label=''>
        </div>
        <div className="articlesDrawer__itemContainer__items">
            {
                props.potions.map(option=>(
                    <label>
                        <span className='desc'></span>
                        {/* <input type="checkbox"  value={} name={props.header} id="" /> */}
                    </label>
                ))
            }
        </div>

    </div>
  )
}

export default Item