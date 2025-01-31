const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ✅ Route to securely send API key to frontend
app.get("/api/key", (req, res) => {
  res.json({ apiKey: process.env.OPENAI_API_KEY });
});

// ✅ Default route (optional, just to check if server is running)
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
