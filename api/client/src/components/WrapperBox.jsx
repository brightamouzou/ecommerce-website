import React from 'react'

function WrapperBox({children}){
  return (
    <div className='wrapperBox'>
        {children}
    </div>
  )
}

export default WrapperBox