import React from 'react'
import { Link } from 'react-router-dom'

const ManArticle = (props) => {
  return (
    <div className="options s-row" {...props.ariaLabel}>
        {
            Object.keys(props.infos).map(info=>(
                <div className="options__item">
                  <Link to={props[info]} exact>{info}</Link>
                </div>
            ))
        }

    </div>
  )
}

export default ManArticle