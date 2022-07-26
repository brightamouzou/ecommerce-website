import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm';
import { login } from '../redux/actions/user';
import { useDispatch } from 'react-redux';
import {isAuth as isAuthMiddleware} from "../utils/api_calls/isAuth"
import { useHistory } from 'react-router-dom';
function Login() {
  const [error, setError] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const dispatch=useDispatch();
  const history=useHistory();

  useEffect(()=>{
    async function isAuthFunc(){
      const isAuthConfirmation=await isAuthMiddleware();
      //console.log(isAuthConfirmation);
      if(isAuthConfirmation.isAuthentificated){
        setIsAuth(true);
        history.push("/dashboard");
      }
    }
    isAuthFunc();

  },[])
  
  async function handleSubmit(formData) {
    dispatch(login(formData));
  }
  return <LoginForm onSubmit={handleSubmit} error={error} />;
}

export default Login;

