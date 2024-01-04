import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import { ModalContext } from '../contexts/Modal';
import { PayementApiCall } from '../utils/api_calls/payement';
import LoadingSomeWhere from './LoadingSomeWhere';

const KEY="pk_test_51Ks9z7EInU9CYDVJQqEQ8Pcmek0pDtUnNsCPSkn6MfZw4sirU3Nq4iVbWugwBH8MtLwS5JI0OmtURCTlUzZVYL0n00zBFGkujH";
function Pay({children,amount,...otherProps}) {
  console.log(amount);
  const history=useHistory()
  const modalContext=useContext(ModalContext);
  const onToken=async(token)=>{
    modalContext(LoadingSomeWhere,null,null,null,true,null,null,"Veuilez patienter");
    if(token){
      let response=await PayementApiCall.payementApiCall(token.id);
      if(response.status==200){
        window.location.replace(response.redirectUrl);
        window.history.replaceState("", "", );
      }else{
      modalContext(LoadingSomeWhere,null,null,null,false,null,null,"Veuilez patienter");

      }
    }
    console.log(token);
  }

    function formatTotalAmount(amount ) {
      return Number(Number(amount/100).toFixed(2));
    } 
  return (
    <div {...otherProps}>
      <StripeCheckout
        name="BAB SHOP inc"
        description={"Achat : " + formatTotalAmount(amount) + " $"}
        image={"https://assets.turbologo.com/blog/fr/2019/11/19134135/puma-logo-cover.png"}
        amount={amount}
        stripeKey={KEY}
        token={onToken}
        shippingAddress={true}
        billingAddress={false}
        email={true}
      >
        {children}
      </StripeCheckout>
    </div>
  );
}

export default Pay