const mongoose=require("mongoose");
const Schema=mongoose.Schema

const DeliveryShema=new Schema({
    articleId:{type:String},
    saleDate:{type:Date, default:Date.now()},
    deliveryDate:{type:Date},
    deliveryAddress:{type:String},
    deliveryStatus:{type:Number, default:0} //1 if delivred else 0
})