import React from 'react'
import { Link } from 'react-router-dom';

function SliderItem({element}) {
  return (
    <div className="silderItem">
      <div className="silderItem__img">
        <picture>
          <source srcSet={element.imageL} media="(min-width: 768px)" />
          <source srcSet={element.imageM} media="(min-width: 600px)" />
          <img src={element.imageM} alt="" />
        </picture>
      </div>
      <div className="silderItem__desc">
        <div className="silderItem__desc__title">
          <h1>{element.title}</h1>
        </div>
        <div className="silderItem__desc__text">{element.desc}</div>
        <div className="silderItem__desc__link">
          <button className="isDark">
            <Link exact to={element.link}>{element.btnLabel}</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderItem