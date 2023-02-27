const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Product = require('./models/porductModel');
app.use(express.json());

app.get("/about", (req, res) => {
  res.send("what you want to know , how are you ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post('/product',async(req,res)=>{
   try{

    const product = await Product.create(req.body)
    res.status(200).json(product);

  }catch(error){
     console.log(error.message);
     res.status(500).json({message:error.message}) 
   }
})

app.get('/product',async(req,res)=>{
    try{
 
     const product = await Product.find({})
     res.status(200).json(product);
 
   }catch(error){
      console.log(error.message);
      res.status(500).json({message:error.message}) 
    }
 })
mongoose
  .connect(
    "mongodb+srv://sachinchandran2784:DsFrZL9uO2WF94bZ@cluster0.xml1fgj.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
  }).catch((error)=>{
     console.log(error);
  });
