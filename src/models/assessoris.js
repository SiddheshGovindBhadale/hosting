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
  about:{
    type:String,
    trim:true
  },
  features:{
    type:String,
    trim:true
  },
  image:{
  
  }
})

const assessoris = new mongoose.model("assessoris" ,menSchema );

module.exports = assessoris ;