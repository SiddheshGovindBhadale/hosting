const express = require('express');
const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
  title:{
    type:String,
    trim:true
  },
  discreption:{
    type:String,
    trim:true
  },
  product_id:{
    type:String,
    trim:true
  },
  bg_color:{
    type:String,
    trim:true
  },
  image:{
    
  }
})

const showcase = new mongoose.model("showcase" ,menSchema );

module.exports = showcase ;