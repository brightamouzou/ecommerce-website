const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const shoeSchema=new Schema({
    name:{type: String,max:300, required:true},
    category:{type:String},
    subCategories:{type:Array}, //List of subcategories
    sex:{type:String, enum:["M", "F"], required:true},
    price:{type:Number, maxlength:10,  required:true},
    model:{type:String, max:300},
    colors:{type:Array},
    images:{
        type: Map,
        of:String,
    }
})

module.exports=mongoose.model(shoeSchema, "Shoe")