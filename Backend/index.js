const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://mern3650.s3-website-us-east-1.amazonaws.com",
    ],
    credentials: true,
  }),
);

// Handle preflight requests (OPTIONS)
app.options("*", cors());

// Routes
const bookRoute = require("./src/Books/book.route");
const orderRoute = require("./src/orders/order.route");
app.use("/api/books", bookRoute);
app.use("/api/orders", orderRoute);

// Connect to MongoDB
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("mongodb connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

// Root endpoint
app.get("/", (req, res) => {
  res.send("my server!");
});

main();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
