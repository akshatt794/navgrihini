// backend/index.js
const path = require("path");
const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const multer = require("multer");
require("dotenv").config();

// models
const Product = require("./models/Product");
const Banner  = require("./models/Banner");
const Order   = require("./models/Order");
const User    = require("./models/User");
const productRoutes = require('./routes/products');


// modular routes
const authRoutes      = require("./routes/auth");
const adminProdRoutes = require("./routes/products");

const app = express();

// ─── MIDDLEWARE ────────────────────────────────────────────────────────────────

// CORS + JSON body parsing
app.use(cors());
app.use(express.json());
app.use('/api/products', productRoutes);

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ─── DATABASE ──────────────────────────────────────────────────────────────────

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(8000, () => console.log("🚀 Server listening on port 8000"));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });

// ─── LEGACY PUBLIC ROUTES ──────────────────────────────────────────────────────

// Simple health check
app.get("/", (req, res) => res.send("Backend API is running!"));

// PRODUCTS
// List all
app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get single
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Create
app.post("/api/products", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";
    const product = new Product({ name, price, description, category, image });
    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Update
app.put("/api/products/:id", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const update = { name, price, description, category };
    if (req.file) update.image = `/uploads/${req.file.filename}`;
    const product = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Delete
app.delete("/api/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// BANNERS
app.get("/api/banners", async (req, res) => {
  const banners = await Banner.find();
  res.json(banners);
});
app.post("/api/banners", upload.single("image"), async (req, res) => {
  try {
    const { title, link } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";
    const banner = new Banner({ title, link, image });
    await banner.save();
    res.json(banner);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});
app.delete("/api/banners/:id", async (req, res) => {
  try {
    await Banner.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ORDERS
app.get("/api/orders", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// USERS
app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// ─── AUTH + ADMIN ROUTES ───────────────────────────────────────────────────────

// Public auth
app.use("/api/auth", authRoutes);

// Admin-only product CRUD
app.use("/api/admin/products", adminProdRoutes);

// ─── START SERVER ─────────────────────────────────────────────────────────────

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`🚀  Server listening on port ${PORT}`));
