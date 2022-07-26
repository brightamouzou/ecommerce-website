import {Link} from "react-router-dom"
import React, { useContext, useEffect, useState } from 'react';
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { totalPriceContext } from '../../pages/Cart';
import { useMemo } from 'react';
import { useRef } from 'react';
import Pay from '../Pay';
import {getTotalAmount} from "../../utils/getTotalCartAmount" 
function TotalCart({onClick}) {
  const totalPriceCont = useContext(totalPriceContext);
  const [price, setPrice] = useState(0);
  const [displayPaymentButton, setDisplayPaymentButton] = useState(false);
  let nbItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")).length
    : 0;

  function formatTotalAmount(amount = price) {
    return Number(Number(price / 100).toFixed(2));
  }
  function formatCurrency(amount) {
    return Number(Number(amount).toFixed(2));
  }

  useEffect(() => {
    try {
      let totalAmount = getTotalAmount();
      setPrice(totalAmount);
      if (totalAmount === 0) {
        setDisplayPaymentButton(false);
      } else if (totalAmount > 0) {
        setDisplayPaymentButton(true);
      }
    } catch (err) {
      console.log(err.message);
    }
  }, [totalPriceCont]);
  return (
    <div className="totalCart">
      <div className="totalCart__header">
        <div>Récapitulatif</div>
      </div>
      <div className="totalCart__body">
        <table>
          <tr>
            <td className="label">
              Sous total{" "}
              <abbr
                title={`Le sous-total correspond au prix total de votre \ncommande avant l'application de réductions. \nIl ne comprend pas les frais delivraison,\nles taxes et les frais afférents aux transactions internationales.`}
              >
                <QuestionMarkIcon />
              </abbr>
            </td>
            <td className="t-warning t-bold price">
              {
                Number(Number(price / 100)- nbItems*10.99).toFixed(
                  2
                ) /*the current price is in cents so we do /100*/
              }
              $
            </td>
          </tr>
          <tr>
            <td className="label">
              Frais estimés de prise en charge et d'expédition
            </td>
            <td className="price t-warning t-bold price">{10.99 * nbItems}$</td>
          </tr>
          <tr>
            <td className="label">Réduction</td>
            <td className="price">__</td>
          </tr>

          <tr className="total">
            <td className="label">Total</td>
            <td className="price t-success t-bold price">
              {formatTotalAmount()}$
            </td>
          </tr>
        </table>

        <div className="buttons">
       
          <button
            disabled={!displayPaymentButton}
            className="btnRounded isDark"
            onClick={() => {
              // console.log(onClick);
              onClick();
            }}
          >
            Paiement
          </button>
        </div>
      </div>
    </div>
  );
}  

export default TotalCart