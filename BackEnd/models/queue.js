const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const queueSchema = new Schema({
  UserID: {type: Schema.Types.ObjectId, ref: "user"},
  AttractionID: {type: Schema.Types.ObjectId, ref: "attraction"},
  ServiceID: {type: Schema.Types.ObjectId, ref: "service"},
  ReservationTime: { type: Date},
  Queuing: {type: Boolean},
  CreatedAt: {type: Date,default:Date.now },
  UpdatedAt: {type: Date,default:Date.now }

});
module.exports = mongoose.model("queue", queueSchema);
