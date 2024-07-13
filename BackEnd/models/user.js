const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  FirstName: { type: String },
  LastName: { type: String},
  Email: { type: String},
  UserName: {type: String},
  Password: {type: String},
  DateOfBirth: {type: Date},
  MobileNumber: {type: String},
  CreatedAt: {type: Date,default:Date.now },
  UpdatedAt: {type: Date,default:Date.now }

});
module.exports = mongoose.model("user", userSchema);
