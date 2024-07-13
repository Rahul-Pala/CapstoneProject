const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const showSchema = new Schema({
  Name: { type: String },
  Description: { type: String},
  Image: { type: String},
  Category: {type: String},
  Duration: {type: Number},
  CreatedAt: {type: Date,default:Date.now },
  UpdatedAt: {type: Date,default:Date.now }

});
module.exports = mongoose.model("show", showSchema);
