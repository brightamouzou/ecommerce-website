import React from 'react'
import error404 from "../assets/images/notFound3.jpg"

function NotFound({message}) {
  return (
    <div className="notFoundPage">
      <div className="notFoundPage__img">
        <img src={error404} alt="" />
      </div>
      <div className="notFoundPage__message">
        <h2 className='m-3'>
            Erreur 404
        </h2>
        <div>
          {message
            ? message
            : "Désolé, la page que vous souhaitez visiter est introuvable. Si vous etes que cette page devrait exister veuillez reesayer, le cas echant , retournez à la page d'accueil"}
        </div>
        <div className="buttons">
          <button className="isDark">Reesayer</button>
          <button className="isDark">Retourner à la page d'accueil'</button>
        </div>
      </div>
    </div>
  );
}

export default NotFound