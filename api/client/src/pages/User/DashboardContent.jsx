import React from 'react'
import FavoritePage from '../FavoritePage';

function DashboardContent() {
  return (
    <div className="dashobard__content dashobard__user__content">
     
      <h2>Vos favoris</h2>
      <FavoritePage/>
    </div>
  );
}

export default DashboardContent