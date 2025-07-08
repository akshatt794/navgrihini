const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Product = require('../models/Product');

// Multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// GET all products (with id mapped)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    const productsWithId = products.map(product => ({
      ...product._doc,
      id: product._id.toString(),
    }));
    return res.json(productsWithId);
  } catch (err) {
    console.error("🔥 Error in GET /api/products:", err);
    return res
      .status(500)
      .json({ error: "Failed to fetch products – check server logs" });
  }
});

// GET single product (with id mapped)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Map _id to id
    const productWithId = {
      ...product._doc,
      id: product._id.toString(),
    };
    return res.json(productWithId);
  } catch (err) {
    console.error("🔥 Error in GET /api/products/:id:", err);
    return res.status(500).json({ error: "Failed to fetch product" });
  }
});

// POST new product with image upload (returning id)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description, category } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required.' });
    }

    let image = '';
    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    const product = new Product({
      name,
      price,
      description,
      category,
      image,
    });

    await product.save();

    const productObj = product.toObject();
    productObj.id = productObj._id.toString();

    res.status(201).json(productObj);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error saving product' });
  }
});

// PUT update product (optional: add multer if you allow image update)
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const updateData = { name, price, description, category };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!product) return res.status(404).json({ error: 'Product not found' });

    // Map _id to id
    const productWithId = {
      ...product._doc,
      id: product._id.toString(),
    };
    res.json(productWithId);
  } catch (err) {
    res.status(500).json({ error: 'Error updating product' });
  }
});

// DELETE product
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting product' });
  }
});

module.exports = router;
