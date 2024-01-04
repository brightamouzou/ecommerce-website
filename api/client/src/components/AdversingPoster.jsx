import React, { useEffect } from 'react'

function AdversingPoster() {
  let currentDate= Date.now();
  let limitDateMilliseconds =currentDate+1296e+6;
  let limiteDate=new Date(limitDateMilliseconds).toLocaleDateString();
  


  
  return (
    <div className="adverertisingPost">
      <small>
        15 % de reduction sur tous les achats jusqu'au {limiteDate}.{" "}
        <a href="#">En savoir plus</a>
      </small>
    </div>
  );
}

export default AdversingPoster