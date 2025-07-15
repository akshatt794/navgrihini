// backend/index.js
const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const bannerRoutes = require('./routes/banners');
app.use('/api/banners', bannerRoutes);
const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes);
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

// CORS + JSON body parsing
const allowedOrigins = [
  "https://navgrihini.netlify.app",
  "http://localhost:5173", // for local dev
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Only if you need cookies/auth (optional)
}));
app.use(express.json());


// Ensure 'uploads' directory exists (prevents ENOENT errors on deployment)
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);

// ─── MIDDLEWARE ──────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(uploadsDir));

// ─── MODULAR ROUTES ──────────────────────────────────────────
// These files should export an Express Router
app.use("/api/products", require("./routes/products"));
app.use("/api/banners", require("./routes/banners"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

// ─── HEALTH CHECK ────────────────────────────────────────────
app.get("/", (req, res) => res.send("Backend API is running!"));

// ─── DATABASE CONNECTION AND SERVER START ────────────────────
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
