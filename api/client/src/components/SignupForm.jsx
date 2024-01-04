import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputWrapper from './InputWrapper';
import WrapperBox from './WrapperBox';
import { useFormik } from "formik";

function SignupForm({onSubmit,error}) {
  const [handleError,setHandleError]=useState(false);

  const validate = (values) => {
   const errors = {};

    if (!values.lastName || values.lastName.trim()=="") {
      errors.lastName = "Nom requis";
    } else {
      if (!values.firstName ||  values.firstName.trim()=="") {
        errors.firstName = "Prenom requis";
      } else {
        if (!values.email || values.email.trim()=="") {
          errors.email = "Email requis";
        } else {
          if (!values.password || values.password.trim() == "") {
            errors.password = "Mot de passe requis";
          } else {
            if (!values.passwordConfirmation) {
              errors.passwordConfimation =
                "Confirmation de mot de passe requis";
            } else {
              if (values.passwordConfirmation !== values.password) {
                errors.password = "Les mots de passe ne sont pas identiques";
              }
            }
          }
        }
      }
    }
  
   return errors;
 };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      newsletter: "",
      password: "",
      passwordConfirmation: "",
    },
    validate: validate,
    onSubmit: (values) => {
      onSubmit({...values});
    },
  });

  useState({
    if(error){
      setHandleError(error);
    }
  },[])

  function handleSubmit(e){
    e.preventDefault(); 
    formik.handleSubmit(e);


  }
  return (
    <div className="login connection">
      <WrapperBox>
        <form
          className="connection__form"
          name="signupForm"
          onSubmit={formik.handleSubmit}
        >
          <div className="connection__form__header">
            <h3>Créer votre compte BAB SPORTS maintenant!</h3>

            <div className="errorBox t-center m5">
              <span className="t-danger">
                {formik.errors ? (
                  <div>{Object.values(formik.errors).length ? Object.values(formik.errors)[0].toString():""}</div>
                ) : null}
              </span>
            </div>
          </div>
          <div className="connection__form__body">
            <InputWrapper>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                name="lastName"
                id="lastName"
                placeholder="Prénoms"
              />
            </InputWrapper>

            <InputWrapper>
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                name="firstName"
                id="firstName"
                placeholder="Nom"
              />
            </InputWrapper>

            <InputWrapper>
              <input
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Addresse electronique"
              />
            </InputWrapper>

            <InputWrapper>
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
              />
            </InputWrapper>
            <InputWrapper>
              <input
                name="passwordConfirmation"
                id="passwordConfirmation"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirmation}
                type={"password"}
                placeholder="Confirmer le mot de passe"
              />
            </InputWrapper>

            <InputWrapper className="checkbox">
              <input
                type="checkbox"
                onChange={formik.handleChange}
                value={formik.values.newsletter}
                name="newsletter"
                id="newsletter"
              />
              <label htmlFor="newsletter">
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
            <button className="isDark filled" type="submit">
              Je créee mon compte
            </button>
          </div>
          <div className="t-center m5">
            <Link to="/login" className="m-5 ">
              <small>Vous avez déjà un compte? Connectez vous.</small>
            </Link>
          </div>
        </form>
      </WrapperBox>
    </div>
  );
}

export default SignupForm