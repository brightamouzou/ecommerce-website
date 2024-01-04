import axios from "axios";
import { fetchData } from "./fethingArticleColor";

export class PayementApiCall{
  static shippingInformations="fg";

  static async payementApiCall(tokenId) {
  let cartItems = localStorage.getItem("cartItems");
  if (cartItems) cartItems = JSON.parse(cartItems);
  console.log(tokenId);
  try {
    if (tokenId) {
      if (cartItems.length) {
        let neededElements = cartItems.map((ele) => {
          let { slug, colorId, qty, size, category } = JSON.parse(ele);
          return { slug, colorId, qty, size, category };
        });

        let articlesFetching = Promise.all(
          neededElements.map(async (element) => {
            const { slug, colorId, qty, size, category } = element;
            return fetchData(category, slug, colorId, true).catch(
              (err) => null
            );
          })
        );

        articlesFetching
          .then((res) => console.log(res))
          .catch((err) => console.log(err.message));
        console.log(neededElements);

        let { data } = await axios({
          method: "POST",
          url: "/api/create-payement-session",
          data: {
            purchasedElements: neededElements,
            tokenId: tokenId,
            shippingInformations: this.shippingInformations
          },
        });

        console.log(data);
        return data
      }
    }
  } catch (e) {
    console.log(e.message);
  }
}

}

