const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriberSchema = new Schema({
  firstname: { type: String, maxlength: 32, required: true },
  surname: { type: String, maxlength: 32, required: true },
  email: { type: String, maxlength: 250, required: true },
  password:{type:String, minlength:8, maxlength:32}, 
  newsLetterSubscriber:{type:Boolean}
});
module.exports = mongoose.model("Subscriber", subscriberSchema);
