const express = require('express');
const multer = require("multer");
const path = require("path");
const router = new express.Router();
const app = express();
const Product = require("../models/mens");



const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
}).array('image',4)
router.use( express.static(__dirname+'upload/images'));




//get data method
router.get('/api/product', async(req, res) => {
  try{
     const getproduct = await Product.find({});
     res.send(getproduct);
  }catch(e){
     res.status(400).send(e);
  }
})


//post data method
router.post('/api/product', upload, async(req, res ,next) => {
  try{
     const addProduct = new Product({
       name: req.body.name,
       midname:req.body.midname,
       sirname: req.body.sirname,
       image:req.files
     })
     const insertPtoduct =  await addProduct.save();
     res.status(201).send(insertPtoduct)
     
    
  }catch(e){
     res.status(400).send(e);
     console.log(e)
  }
})


//patch(update) data method
router.patch('/api/product/:id', async(req, res) => {
  try{
     const _id = req.params.id;
     const updateproduct = await Product.findByIdAndUpdate(_id,req.body,{
       new:true
     });
     res.send(updateproduct);
  }catch(e){
     res.status(500).send(e);
  }
})


//delete data method
router.delete('/api/product/:id', async(req, res) => {
  try{
     const Deleteproduct = await Product.findByIdAndDelete(req.params.id);
     res.send(Deleteproduct);
  }catch(e){
     res.status(500).send(e);
  }
})


module.exports = router;