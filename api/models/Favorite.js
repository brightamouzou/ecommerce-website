const mongoose= require("mongoose");
const uniqueValidator=require("mongoose-unique-validator");

const Schema=mongoose.Schema

const favoriteSchema=new Schema({
    userId:{type:mongoose.SchemaTypes.ObjectId,references:"User",required:true},
    slug:{type:String,required:true},
    colorId:{type:mongoose.SchemaTypes.ObjectId,references:"Color",required:true,unique:true},
    category:{type:String,required:true},
},{
    timestamps:true,
})

favoriteSchema.plugin(uniqueValidator);

module.exports=mongoose.model("FavoriteArticle",favoriteSchema)