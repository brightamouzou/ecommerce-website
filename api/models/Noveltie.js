const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const noveltieSchema=new Schema({
    idArticle:{type:String, required:true}, 
    category:{type:String, required:true}, 
    subCategories:{type:Array},
    sex:{type:String},
    
})

module.exports=mongoose.model(ShoeSchema, "Shoe")