import { createContext } from "react";


import React from 'react'
import { useState } from "react";
export const HeaderOpened=createContext(false)

/** 
 * I have created this compnent because of the mobile header drawer.
 * I have remarked that when the compoent is rerended , then my menu toggler (menu options toggler) doesn't work again
 * So i created this to have a state which will change each time that my header drawer is opened or closed so and i use it  the useEffect of the component MenuOptions (as variable of dependencies array)
 * Then each time that drawer is opened or closed that variable change it gonna reexcecute the useEffect of MenuOption (where i have the toggler function) so that my toggler can still work 
*/


function HeaderOpenedContextComponent({children}) {
    const  [isHeaderOpened, setIsHeaderOpened]=useState(false);
  
    return (
    <HeaderOpened.Provider value={{setter:setIsHeaderOpened, value:isHeaderOpened}}>
        {children}
    </HeaderOpened.Provider>

  )
}

export default HeaderOpenedContextComponent