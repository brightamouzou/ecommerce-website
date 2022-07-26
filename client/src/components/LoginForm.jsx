import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InputWrapper from './InputWrapper';
import LoadingSomeWhere from "./LoadingSomeWhere"
import WrapperBox from './WrapperBox';

function LoginForm({onSubmit,error}) {
  const userState=useSelector(s=>s.userState);
  const [isFormSubmited, setIsFormSubmited] = useState(false);

  useEffect(() => {
    if(userState.error.length)
    setIsFormSubmited(false);
  }, [userState.error]);
  function validate(values){
    const errors={}
    if(!values.password || !values.email){
      // setIsFormSubmited(false);
      document.querySelector(".submit").setAttribute("disabled","true");
      errors.message="Veuillez saisir votre email et/ou mot de passe"
    }else{
      // setIsFormSubmited(true);
      document.querySelector(".submit").removeAttribute("disabled");
    }
    return errors
    
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      onSubmit({...values});
    }
  })
  return (
    <div className="singnup connection">
      <WrapperBox>
        <form className="connection__form" onSubmit={formik.handleSubmit}>
          <div className="connection__form__header">
            <h3>Connectez vous à votre compte</h3>
            <div className="t-center t-danger">
              <br />
              {userState.error}
            </div>
            <div className="t-center t-danger">
              <small>{Object.values(formik.errors)[0]}</small>
            </div>
          </div>
          <div className="connection__form__body">
            <InputWrapper>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Addresse electronique"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </InputWrapper>

            <InputWrapper>
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </InputWrapper>
            <div className="forgotPassword">
              <Link className="" to={"#"}>
                Mot de passe oublié?
              </Link>
            </div>
          </div>
          <div className="connection__form__footer">
            <button
              type="submit"
              className="isDark submit filled"
              onClick={() => {console.log("clicked");setIsFormSubmited(true)}}
            >
              {isFormSubmited ? <LoadingSomeWhere /> : "Se connecter"}
            </button>
          </div>
        </form>

        <div className="t-center m5">
          <Link to="/signup">
            <small className="m5">
              Pas de compte? Inscrivez vous maintenant pour benificer des toutes
              nos <strong>offres membres</strong>
            </small>
          </Link>
        </div>
      </WrapperBox>
    </div>
  );
}

export default LoginForm