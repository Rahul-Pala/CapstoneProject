const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const attractionSchema = new Schema({
  Name: { type: String },
  Description: { type: String},
  Image: { type: String},
  Category: {type: String},
  FamilyFriendly: {type: Boolean},
  HeightRestriction: {type: Number},
  CreatedAt: {type: Date,default:Date.now },
  UpdatedAt: {type: Date,default:Date.now }

});
module.exports = mongoose.model("attraction", attractionSchema);
