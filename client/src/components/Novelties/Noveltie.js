import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Noveltie = (props) => {
    const [infos, setInfos]=useState({});
  
    useEffect(()=>{
        setInfos(props.infos);
        console.log(props);
    }, [props])

    return (
    
    <div className="options s-row">
        {
                Object.keys(props.infos).map(element =>(
                    <div><Link to={infos[element]} className='options__item noveltie' exact>{element}</Link></div>
                ))
                
        }
    </div>
  )
}

export default Noveltie