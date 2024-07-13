const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
  ServiceType: { type: String },
  AvailabilityStatus: { type: String},
  Location: { type: String},
  CreatedAt: {type: Date,default:Date.now },
  UpdatedAt: {type: Date,default:Date.now }

});
module.exports = mongoose.model("service", serviceSchema);
