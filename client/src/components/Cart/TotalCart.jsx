import React from 'react';
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

function TotalCart() {
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
            <td className="price">120$</td>
          </tr>
          <tr>
            <td className="label">
              Frais estimés de prise en charge et d'expédition
            </td>
            <td className="price">10.99$</td>
          </tr>
          <tr>
            <td className="label">Réduction</td>
            <td className="price">__</td>
          </tr>

          <tr className="total">
            <td className="label">Total</td>
            <td className="price">__</td>
          </tr>
        </table>

        <div className="buttons">
          <button className="btnRounded isDark">Paiement</button>
        </div>
      </div>
    </div>
  );
}

export default TotalCart