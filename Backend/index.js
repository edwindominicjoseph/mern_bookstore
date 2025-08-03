const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const client = require("prom-client");
client.collectDefaultMetrics();

// Trust reverse proxy (for HTTPS + IPs)
app.set("trust proxy", 1);

// Metrics setup
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

setInterval(() => {
  memoryUsageGauge.set(process.memoryUsage().heapUsed);
}, 5000);

// Prometheus middleware
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

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

// ✅ Optional health check route
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// ✅ CORS for CloudFront domain
const allowedOrigins = ["https://mern.edwindominicjoseph.store"];

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

// Connect to MongoDB
async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.get("/", (req, res) => {
    res.send("my server!");
  });
}

main()
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

// ✅ Restrict server to localhost only (NGINX proxy handles public)
app.listen(port, "127.0.0.1", () => {
  console.log(`Server running securely on http://127.0.0.1:${port}`);
});
