const express = require("express");
const app = express();
const cors = require('cors'); 
require('dotenv').config()
const port = process.env.PORT || 5000;


// middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Automobile server is running")
});

app.listen(port, () => {
  console.log(`Automobile server is running on  ${port}`);
});