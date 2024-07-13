const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const queueSchema = new Schema({
  UserID: {type: Schema.Types.ObjectId, ref: ‘user’},
  AttractionID: {type: Schema.Types.ObjectId, ref: ‘attraction’}.
  ReservationTime: { type: Number},
  queueName: {type: String},
  Queuing: {type: Boolean},
  CreatedAt: {type: Date,default:Date.now },
  UpdatedAt: {type: Date,default:Date.now }

});
module.exports = mongoose.model("queue", queueSchema);
