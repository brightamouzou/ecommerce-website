const mongoose=require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;

const ArrayOfMap = new Schema({
  name:{type:String},
  colorId:{type:Schema.Types.ObjectId, ref:"Color"}
});

const articleSchema = new Schema({
  name: { type: String, max: 300, required: true},
  brand: { type: String, maxlength: 250 },
  description: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  subCategories: { type: Array, required: true}, //List of subcategories
  price: { type: Number, maxlength: 10, required: true },
  sex: { type: String, enum: ["men", "women", "children", "all"] },
  model: { type: String, max: 300},
  colors: { type:[ArrayOfMap]}, //Array of ids of the differents colors of the article
  availableQuantity: { type: Number },
  availableSizes: { type:Object}, //Hash table of size:availbale-quantity
  stars: { type: Number, min: 0, max: 5 }

  // images:{type:Array, required:true} I banish this path because all  paths are in color Model
});


// mongooseUniqueValidator.plugin(articleSchema);
// articleSchema.plugin(mongooseUniqueValidator)

module.exports=mongoose.model("Article", articleSchema);