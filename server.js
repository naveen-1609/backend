const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Enable CORS Properly
app.use(cors({ origin: "*", methods: "GET, POST", allowedHeaders: "Content-Type" }));
app.use(express.json());

// ✅ API Route to Send API Key
app.get("/api/key", (req, res) => {
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: "API Key is missing in the backend." });
  }
  res.json({ apiKey: process.env.OPENAI_API_KEY });
});

// ✅ Default Route to Test Backend
app.get("/", (req, res) => {
  res.send("✅ Backend is working with CORS enabled!");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});