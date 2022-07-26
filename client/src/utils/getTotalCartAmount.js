export function getTotalAmount() {
  let items = localStorage.getItem("cartItems");
  console.log("prix mofifié");
  console.log(items);
  let tmpPrice = 0;
  if (items) items = JSON.parse(items);
  console.log(items);
  if (items.length != 0) {
    items.forEach((ele) => {
      console.log(ele["price"]);
      tmpPrice += JSON.parse(ele).price;
    });
  }
    const shippingCostUnit = 1099;

    console.log("total amount: ", tmpPrice + items.length * shippingCostUnit);

    return tmpPrice + items.length * shippingCostUnit;

}
