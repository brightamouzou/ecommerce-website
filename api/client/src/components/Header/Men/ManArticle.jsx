import React from 'react'
import { Link } from 'react-router-dom'

const ManArticle = (props) => {
  return (
    <div className="options s-row" {...props.ariaLabel}>
        {
            Object.keys(props.infos).map(info=>(
                <div className="options__item">
                  <a href={props.infos[info]}>{info}</a>
                </div>
            ))
        }

    </div>
  )
}

export default ManArticle