const mongoose = require("mongoose");
const mongooseUniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unqiue: true },
  password: { type: String, required: true },
  hasSuscribedNewsLetter:{type:Number,required:true, default:true}
});

module.exports=mongoose.model("User",UserSchema);