// backend/index.js
const path = require("path");
const fs = require("fs");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Ensure 'uploads' directory exists (prevents ENOENT errors on deployment)
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

// CORS configuration (before routes)
app.use(
  cors({
    origin: [
      "https://navgrihini.netlify.app",   // Frontend live
      "http://localhost:5173",            // Local dev
      "https://navgrihini.onrender.com",  // (optional, for testing)
    ],
    credentials: true,
  })
);

// Body parser middleware
app.use(express.json());

// Serve static files (for uploaded images)
app.use("/uploads", express.static(uploadsDir));

// Modular routes
app.use("/api/products", require("./routes/products"));
app.use("/api/banners", require("./routes/banners"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));

// Health check route
app.get("/", (req, res) => res.send("Backend API is running!"));

// Database connection and server start
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
