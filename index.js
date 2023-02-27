const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

app.get("/about", (req, res) => {
  res.send("what you want to know , how are you ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose
  .connect(
    "mongodb+srv://sachinchandran2784:DsFrZL9uO2WF94bZ@cluster0.xml1fgj.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
  }).catch((error)=>{
     console.log(error);
  });
