const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000; // ✅ Use Render-assigned port

app.use(cors()); // ✅ Allow requests from frontend
app.use(express.json()); // ✅ Parse JSON requests

// ✅ Route to securely send OpenAI API key to frontend
app.get("/api/key", (req, res) => {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key is missing!" });
  }
  res.json({ apiKey: apiKey.trim() });
});

// ✅ Default route (Check if backend is working)
app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});


// ✅ Start the server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server running on port ${PORT}`);
});