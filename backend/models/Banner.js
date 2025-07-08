const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
  image: { type: String, required: true },
  link: { type: String },
  text: { type: String }
});

module.exports = mongoose.models.Banner || mongoose.model('Banner', BannerSchema);
