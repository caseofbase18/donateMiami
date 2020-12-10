const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true,unique:true },
  body: String,
  password: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now },
  firstName: { type: String },
  lastName: { type: String },
  address:{type: String, required: true},
  city:{type: String, required: true},
  state:{type: String, required: true},
  zip:{type: Number, required: true},
  phone:{type: String, required: true},
  favorites: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "NonProfit",
}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
