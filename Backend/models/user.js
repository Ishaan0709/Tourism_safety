const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  policeStationName: { type: String, required: true },
  areaOfStation: { type: String, required: true },
  post: { type: String, required: true },
  state: { type: String },
  city: { type: String },
  verificationCode: { type: String },
  codeExpiry: { type: Date }
});

module.exports = mongoose.model("User", userSchema);
