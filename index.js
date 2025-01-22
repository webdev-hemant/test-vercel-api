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
  const directoryPath = path.join(__dirname, "storage"); // Replace with your directory name

  // Read the contents of the directory
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Unable to scan directory:", err);
    } else {
      console.log("Contents of directory:", files);
    }
    res.send({message: 'Hello, boss!', files: files.join(', ')})
  });
  
//   res.send("Hello, Vercel!");
});

app.post("/post", (req, res) => {
  res.send("Hello, Vercel!");
});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const fileData = {
      filename: req.file.filename,
      originalName: req.file.originalname,
      path: path.join(__dirname, "storage", req.file.filename),
      mimeType: req.file.mimetype,
      size: req.file.size,
      owner: req.body.owner || "defaultOwner",
    };

    //   const file = await File.create(fileData);

    res.json({ message: "File uploaded successfully", fileData });
  } catch (error) {
    res
      .status(500)
      .json({ error: "File upload failed", errorDetails: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
