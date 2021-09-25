const express = require('express');
const mongoose = require('mongoose');

const menSchema = new mongoose.Schema({
  name:{
    type:String,
    trim:true
  },
  midname:{
    type:String,
    trim:true
  },
  sirname:{
    type:String,
    trim:true
  },
  image:{
  }
})

const Product = new mongoose.model("Product" ,menSchema );

module.exports = Product ;