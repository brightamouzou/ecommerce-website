 import React from 'react'
import ShopForChildren from './Card/Children'
import ShopForMen from './Card/Men'
import ShopForWomen from './Card/Women'
 
 function ShopForOptions() {
   return (
     <div className="shopForSomeOne">
       <h2>POUR QUI FAIS-TU TES ACHATS ?</h2>
       <div className="shopForOptions">
         <ShopForMen />
         <ShopForWomen />
         <ShopForChildren />
       </div>
     </div>
   );
 }
 
 export default ShopForOptions