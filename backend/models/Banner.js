const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
  image: { type: String, required: true },
  link: { type: String },            // Optional URL for banner click
  title: { type: String }            // Optional title for the banner
});

module.exports = mongoose.models.Banner || mongoose.model('Banner', BannerSchema);
