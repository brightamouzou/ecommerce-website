const mongoose=require("mongoose");
const Schema=mongoose.Schema

// const DeliveryShema=new Schema({
//     articleId:{type:String},
//     saleDate:{type:Date, default:Date.now()},
//     deliveryDate:{type:Date},
//     deliveryAddress:{type:String},
//     deliveryStatus:{type:Number, default:0} //1 if delivred else 0
// })

const OrderSchema = new Schema({
  paymentId: { type: String, required: true },
  shippingAddress: { type: Object, required: true },
  billingAddress: { type: Object, required: true },
  saleDate: { type: Date, default: Date.now(), required: true },
  shippingDateInterval: { type: String, required: true },
  deliveryStatus: { type: Number, default: 0, required: true }, //1 if delivred else 0
  purshasedElements: { type: Array, required: true },
  amount: { type: Number, required: true },
});

module.exports=mongoose.model("Order",OrderSchema);