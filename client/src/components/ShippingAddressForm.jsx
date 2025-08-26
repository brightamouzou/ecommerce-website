import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InputWrapper from './InputWrapper';

function ShippingAddressForm({formData,setFormData}) {
     const [countries, setCountries] = useState([]);
     const [error, setError] = useState("");
     const [lastUndefinedIndex, setLastUndefinedIndex] = useState(-1);
     const [shippingAddress, setShippingAddress] = useState("");
     const [shippingPostalCode, setShippingPostalCode] = useState("");
     const [shippingCity, setShippingCity] = useState("");

     useEffect(() => {
        async function fetchCountriesData() {
         const { data } = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags");
         setCountries([...data].map((ele) => ele["name"]["common"]));
        }
       fetchCountriesData();
     }, []);


     function handleSubmit(e) {
         e.preventDefault();
        if(error){
            return
            }
        let form = document.shippingAddressForm;
        const {
            shipping_address,
            shipping_postal_code,
            shipping_city,
            shipping_country,
        } = form;

        let inputs = [
            shipping_address,
            shipping_postal_code,
            shipping_city,
            shipping_country,
        ];

        let inputsValues = [
            shipping_address.value,
            shipping_postal_code.value,
            shipping_city.value,
            shipping_country.value,
        ];

        let undefinedIndex =inputsValues.findIndex((ele) => ele == "");
        if (undefinedIndex!=-1){
            inputs[undefinedIndex].classList.add("b-danger");
            if(lastUndefinedIndex!=-1){
                inputs[lastUndefinedIndex].classList.remove("b-danger");
            }
            setLastUndefinedIndex(undefinedIndex);

        }else {
              //console.log([
              //   shipping_address,
              //   shipping_postal_code,
              //   shipping_city,
              //   shipping_country,
              // ]);
        }
 

    }
  return (
    <div className="paymentDetails">
      <div className="login connection">
        {/* <WrapperBox> */}
        <form
          className="shippingAddress"
          name="shippingAddressForm"
          onSubmit={handleSubmit}
          action=""
        >
          <div className="connection__form__header">
            <h3>Veuillez renseigner l'adresse d'expédition!</h3>
          </div>
          <div className="connection__form__body">
            <InputWrapper>
              <input
                name="shipping_address"
                type="text"
                placeholder="Adresse"
                autoCompleteType="street-address"
                x-autoCompleteType="street-address"
                autoComplete="street-address"
                value={formData.shippingAddress}
                onChange={(e) =>
                  setFormData((v) => ({
                    ...v,
                    shippingAddress: e.target.value,
                  }))
                }
              />
            </InputWrapper>

            <InputWrapper>
              <input
                name="shipping_postal_code"
                type="tel"
                placeholder="Code postal"
                autoComplete="postal-code"
                x-autoCompleteType="postal-code"
                autoCompleteType="postal-code"
                value={formData.shippingPostalCode}
                onChange={(e) =>
                  setFormData((v) => ({
                    ...v,
                    shippingPostalCode: e.target.value,
                  }))
                }
              />
            </InputWrapper>

            <InputWrapper>
              <input
                name="shipping_city"
                type="tel"
                placeholder="Ville"
                autoComplete="locality"
                x-autoCompleteType="locality"
                autoCompleteType="locality"
                value={formData.shippingCity}
                onChange={(e) =>
                  setFormData((v) => ({ ...v, shippingCity: e.target.value }))
                }
              />
            </InputWrapper>

            <InputWrapper className="checkbox">
              <label htmlFor="country">Pays</label>
              <select
                name="shipping_country"
                id="country"
                value={formData.shippingCountry}
                onChange={(e) =>
                  setFormData((v) => ({
                    ...v,
                    shippingCountry: e.target.value,
                  }))
                }
              >
                <option key={-1} value={""} selected></option>
                {countries &&
                  countries.sort().map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
              </select>
            </InputWrapper>
            <InputWrapper>
              <h3 className='t-success'>
                La livraison sera faite entre le{" "}
                {new Date(Date.now() + 86400 * 1000).toLocaleDateString()} et le{" "}
                {new Date(Date.now() + 86400 * 3 * 1000).toLocaleDateString()}
              </h3>
            </InputWrapper>
          </div>
          {/* <div className="connection__form__footer">
            <InputWrapper>
              <button className="isDark filled">Envoyer</button>
            </InputWrapper>
          </div> */}
        </form>
        {/* </WrapperBox> */}
      </div>
    </div>
  );
}

export default ShippingAddressForm