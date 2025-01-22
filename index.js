const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Vercel!");
});

app.post("/post", (req, res) => {
  res.send("Hello, Vercel!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
