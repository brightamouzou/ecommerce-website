import React, { useContext, useEffect, useState } from 'react'
import Pay from '../components/Pay';
import ShippingAddressForm from '../components/ShippingAddressForm';
import Cart from "../pages/Cart";
import { SnackbarContext } from '../contexts/SnackBar';
import { PayementApiCall } from '../utils/api_calls/payement';
import { getTotalAmount } from '../utils/getTotalCartAmount';

function Payment() {
  document.title="Paiement"
  const snackBarSetter=useContext(SnackbarContext);
  const [formData, setFormData] = useState({
    shippingAddress: "",
    shippingPostalCode: "",
    shippingCity: "",
    shippingCountry: "",
  });
  const [totalCartAmount,setTotalAmount]=useState(getTotalAmount());
  //console.log(totalCartAmount);

  function OnPaiement() {
      //console.log(Object.values(formData));

    if (Object.values(formData).findIndex((ele) => ele.trim().length===0)!==-1){
      snackBarSetter(
        "Vous devez d'abord remplir les champs de l'adresse d'expédition",
        true,
        5000,
        "error"
      );
    }else{
      const payTrigger=document.querySelector(".payTrigger");
      PayementApiCall.shippingInformations = formData;

      setTotalAmount(getTotalAmount());
      payTrigger.childNodes[0].click();
    }
  }
  useEffect(() => {
    const totalCart = document.querySelector(".totalCart");
    const shippingAddressForm = document.querySelector(".paymentDetails");

    document.body.style.overflowX='auto'
    if(totalCart){
      shippingAddressForm.appendChild(totalCart,totalCart);
    }
  }, []);
   
  return (
    <div className="payment">
      <Pay className="payTrigger" amount={totalCartAmount}></Pay>
      <Cart OnPaiement={OnPaiement}/>
      <ShippingAddressForm setFormData={setFormData} formData={formData} />
    </div>
  );
}

export default Payment