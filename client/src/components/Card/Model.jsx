import React from 'react';

function ModelCard({large, medium, desc}) {
  return (
    <div className='cardModel'>
        <div className="cardModel__desc">         
            {desc}
        </div>

        <div className="cardModel__before"></div>
        <div className="cardModel__img">
          
            <picture>
                <source media='(min-width:960px)' srcSet={large}/>
                <source media='(min-width:600px)' srcSet={medium}/>
                {/* <source srcSet={props.default}/> */}
                <img src={large} alt={"shop for"+desc} />
            </picture>
        </div>
    </div>
  )
}

export default ModelCard