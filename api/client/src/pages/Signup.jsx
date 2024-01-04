import { Snackbar } from '@mui/material';
import axios from 'axios';
import React, { useContext, useState } from 'react'
import {useHistory } from 'react-router-dom';
import SignupForm from '../components/SignupForm';
import {SnackbarContext} from "../contexts/SnackBar"

function Signup() {
  const history=useHistory();
  const SnackbarContextSetter = useContext(SnackbarContext);
  async function onSubmit(formData){

    try{

      let { data } = await axios.post("/api/users/signup", {
        ...formData
      });
  
      //console.log(data);
      
      if (data.status==201){
        SnackbarContextSetter("Inscription effectuée avec succès",true,3000,"success");
        setTimeout(()=>{
          history.push("/login");
        },3000)
      }else{
        
      }
    }catch(err){
      return
      //Pass
    }
  }
  return (
    <SignupForm onSubmit={onSubmit}/>
  );
}

export default Signup;