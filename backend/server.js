const express = require("express");
const app = express();

app.get("/health", (req, res) => {

const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    version: "1.0.0",
    timestamp: new Date()
  });
});

app.get("/api/activities", (req, res) => {
  res.json([{ id: 1, type: "run" }]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));
});

app.listen(3000, () => console.log("VitalSync API on :3000"));