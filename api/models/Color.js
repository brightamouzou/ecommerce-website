const mongoose=require("mongoose");
const Schema=mongoose.Schema;

// const imageSchema=new Schema({
//     small:String, 
//     default:String, //Witch has medium size
//     large:String
// })

const colorShema=new Schema({
    colorName:{type:String},
    articleId:{type:String}, 
    url:{type:String},
    category: {type:String},
    subCategories:{type:Array},
    images:{type:Map, of:String}, //For views
    sex:{type:String, required:true},
    otherViewImages:{type:Array, maxlength:5} //Array of urls
})


module.exports=mongoose.model("Color", colorShema)
