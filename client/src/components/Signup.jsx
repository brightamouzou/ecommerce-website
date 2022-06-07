import React from 'react'
import InputWrapper from './InputWrapper';
import WrapperBox from './WrapperBox';

function Signup() {
  return (
    <div className="login connection">
      <WrapperBox>
        <form className="connection__form" action="">
          <div className="connection__form__header">
            <h3>Créer votre compte BAB SPORTS maintenant!</h3>
          </div>
          <div className="connection__form__body">
            <InputWrapper>
              <input type="text" placeholder="Prénoms" />
            </InputWrapper>

            <InputWrapper>
              <input type="text" placeholder="Nom" />
            </InputWrapper>

            <InputWrapper>
              <input type="email" placeholder="Addresse electronique" />
            </InputWrapper>

            <InputWrapper>
              <input type="password" placeholder="Mot de passe" />
            </InputWrapper>
            <InputWrapper>
              <input
                type={"password"}
                placeholder="Confirmer le mot de passe"
              />
            </InputWrapper>

            <InputWrapper className="checkbox">
              <input type="checkbox" id="chBox" />
              <label htmlFor="chBox">
                Abonnez-vous aux courriels pour obtenir des mises à jour de la
                part de BAB SPORTS sur les produits, les offres et vos avantages
                de membre
              </label>
            </InputWrapper>
          </div>
          <div className="connection__form__footer">
            <div>
              En créant un compte, tu acceptes la{" "}
              <a href="#">Politique de confidentialité</a> et les{" "}
              <a href="#">Conditions générales de BAB Sports.</a>
            </div>
            <button className="isDark filled">Je créee mon compte</button>
          </div>
        </form>
      </WrapperBox>
    </div>
  );
}

export default Signup;