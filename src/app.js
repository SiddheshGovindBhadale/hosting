const express = require('express');
const mongoose = require('mongoose');
const Product = require("../src/models/mens.js");
const router = require("../src/routers/router");

mongoose.connect("mongodb+srv://Siddhesh:Siddhesh3341@cluster0.cn61z.mongodb.net/Hi?retryWrites=true&w=majority" , {
  useNewUrlParser:true,
}).then(()=>{
  console.log("connection succesful")
}).catch((e)=>{
  console.log("No connection with Database !!!" )
  console.log(e)
})

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(router)



app.listen(port , ()=> {
     console.log(`our port no ${port}`);
});