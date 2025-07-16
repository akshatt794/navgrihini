// backend/routes/banners.js

const express = require('express');
const router = express.Router();
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
const cloudinary = require('../utils/cloudinary');
const Banner = require('../models/Banner');

// Cloudinary storage for banners
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'navgrihini-banners',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  },
});
const upload = multer({ storage });

// GET all banners
router.get('/', async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch banners" });
  }
});

// POST new banner (with image upload to Cloudinary)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, link } = req.body;
    const image = req.file ? req.file.path : "";
    const banner = new Banner({ title, link, image });
    await banner.save();
    res.json(banner);
  } catch (err) {
    res.status(500).json({ error: "Failed to add banner" });
  }
});

// DELETE a banner
router.delete('/:id', async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete banner" });
  }
});

module.exports = router;
