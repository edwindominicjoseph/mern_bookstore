const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//  Prometheus client setup
const client = require("prom-client");
client.collectDefaultMetrics();

// Metrics definitions
const requestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP requests",
  labelNames: ["method", "route", "status_code"],
});

const requestDurationSummary = new client.Summary({
  name: "http_request_duration_seconds_summary",
  help: "Summary of request durations",
  labelNames: ["method", "route", "status_code"],
});

const requestDurationHistogram = new client.Histogram({
  name: "http_request_duration_seconds_histogram",
  help: "Histogram of request durations",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.1, 0.25, 0.5, 1, 2, 5],
});

const memoryUsageGauge = new client.Gauge({
  name: "node_memory_usage_bytes",
  help: "Heap memory used in bytes",
});

// Memory usage tracking
setInterval(() => {
  memoryUsageGauge.set(process.memoryUsage().heapUsed);
}, 5000);

//  Metrics middleware
app.use((req, res, next) => {
  const start = process.hrtime();
  res.on("finish", () => {
    const duration = process.hrtime(start);
    const durationInSec = duration[0] + duration[1] / 1e9;
    const route = req.route?.path || req.path;

    requestCounter.labels(req.method, route, res.statusCode).inc();
    requestDurationSummary
      .labels(req.method, route, res.statusCode)
      .observe(durationInSec);
    requestDurationHistogram
      .labels(req.method, route, res.statusCode)
      .observe(durationInSec);
  });
  next();
});

// Expose /metrics endpoint
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// ✅ Middleware
const allowedOrigins = ["http://mern3650.s3-website-us-east-1.amazonaws.com"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        return callback(new Error("CORS not allowed for this origin"), false);
      }
      return callback(null, origin);
    },
    credentials: true,
  }),
);

// Routes
const bookRoute = require("./src/Books/book.route");
const orderRoute = require("./src/orders/order.route");
app.use("/api/books", bookRoute);
app.use("/api/orders", orderRoute);

// Connect to MongoDB and define root
async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("my server!");
  });
}
main()
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
