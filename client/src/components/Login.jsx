import React from 'react'
import InputWrapper from "./InputWrapper";
import WrapperBox from "./WrapperBox";

function Login() {
  return (
    <div className="singnup connection">
      <WrapperBox>
        <form className="connection__form" action="">
          <div className="connection__form__header">
            <h3>Connectez vous à votre compte</h3>
          </div>
          <div className="connection__form__body">
            <InputWrapper>
              <input type="email" placeholder="Addresse electronique" />
            </InputWrapper>
            <InputWrapper>
              <input type="password" placeholder="Mot de passe" />
            </InputWrapper>
          </div>
          <div className="connection__form__footer">
            <button className="isDark filled">Se connecter</button>
          </div>
        </form>
      </WrapperBox>
    </div>
  );
}

export default Login;

