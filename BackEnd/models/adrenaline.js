const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adrenalineSchema = new Schema({
  UserID: {type: Schema.Types.ObjectId, ref: ‘user’},
  AttractionID: {type: Schema.Types.ObjectId, ref: ‘attraction’}.
  ShowID: {type: Schema.Types.ObjectId, ref: ‘show’},
  CreatedAt: {type: Date,default:Date.now },
  UpdatedAt: {type: Date,default:Date.now }

});
module.exports = mongoose.model("adrenaline", adrenalineSchema);
