import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import profileRoutes from "./routes/profileRoutes.js";
import connectDB from "./database/DBConnection.js";

dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// ✅ Allowed Frontend URLs
const allowedOrigins = [
  "http://localhost:5173",              // Local Vite React
  "https://bcziamfayizfx.netlify.app"    // Your deployed frontend
];

// ✅ CORS setup
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Middleware
app.use(express.json());
// Routes
app.use("/api/profile", profileRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("✅ QR Profile Server Running 🚀");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
