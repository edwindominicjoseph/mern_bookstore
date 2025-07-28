const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// *middleware */
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://mern3650.s3-website-us-east-1.amazonaws.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

//*routes
const bookRoute = require("./src/Books/book.route");
const orderRoute = require("./src/orders/order.route");
app.use("/api/books", bookRoute);
app.use("/api/orders", orderRoute);

// *connect to mongodb

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("my server!");
  });
}
main()
  .then(() => console.log("mongodb connected sucessfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
