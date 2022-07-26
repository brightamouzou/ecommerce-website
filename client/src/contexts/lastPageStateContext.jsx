import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const lastPageStateContext=createContext(null);

function LastPageStateContextComponent({children}) {
    const [currentPage,setCurrentPage]=useState(0);
    const [hasMore,setHasMore]=useState(true);

    const stateInfos={
          page: currentPage,
          setPage:setCurrentPage,
          hasMore,
          setHasMore,
    }

    return (
      <lastPageStateContext.Provider value={stateInfos}>
        {children}
      </lastPageStateContext.Provider>
    );
}

export default LastPageStateContextComponent;