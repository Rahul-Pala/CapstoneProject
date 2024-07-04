const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cartoonSchema = new Schema({
  title: { type: String, default: "rollercoaster" },
  year: { type: Number, default: 2024 },
  rating: { type: String, default: "10"},
  image: {type: String, default: ""},
  episodes: {type: Number, default: 100}
});
module.exports = mongoose.model("cartoon", cartoonSchema);
