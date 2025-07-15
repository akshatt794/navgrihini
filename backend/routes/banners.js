// backend/routes/banners.js
const express = require('express');
const router = express.Router();
const Banner = require('../models/Banner');
const multer = require('multer');
const path = require('path');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
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

// POST new banner
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, link } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";
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
