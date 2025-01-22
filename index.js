require("dotenv").config({});
const express = require("express");
const multer = require("multer");
const File = require("./src/models/file");
const path = require("path");
const fs = require("fs");
const sequelize = require("./src/config/db");
const app = express();
const cors = require("cors");
const upload = multer({ dest: path.join(__dirname, "/storage") });
const port = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());
app.use(
  "/storage/images",
  express.static(path.join(__dirname, "storage/images"))
);

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

app.post("/post", (req, res) => {
  res.send("Hello, Vercel!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
