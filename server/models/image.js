// Upload.js
const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  originalname:{type:String},
  mimetype:{type:String},
  buffer:{type:Buffer},
});

module.exports = Image = mongoose.model("upload", UploadSchema);