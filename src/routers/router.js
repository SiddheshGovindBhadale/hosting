const express = require('express');
const multer = require("multer");
const path = require("path");
const router = new express.Router();
const app = express();
const showcase = require("../models/topShowcase");
const assessoris = require("../models/assessoris");
const hygiene = require("../models/hygiene");



const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
})
router.use( express.static(__dirname+'upload/images'));



/*-------------------------------*/
//testing api
router.get('/', async(req, res) => {
  try{
     res.send("api is running");
  }catch(e){
     res.status(400).send(e);
  }
})
/*---------------------------------*/


/*----------------get---------------*/

//topShowcase products get
router.get('/api/showcase', async(req, res) => {
  try{
     const getproduct = await showcase.find({});
     res.send(getproduct);
  }catch(e){
     res.status(400).send(e);
  }
})

//mobile assessoris products get
router.get('/api/assessoris', async(req, res) => {
  try{
     const getproduct = await assessoris.find({});
     res.send(getproduct);
  }catch(e){
     res.status(400).send(e);
  }
})

//hygiene assessoris products get
router.get('/api/hygiene', async(req, res) => {
  try{
     const getproduct = await hygiene.find({});
     res.send(getproduct);
  }catch(e){
     res.status(400).send(e);
  }
})

/*----------------add---------------*/

//topShowcase post data method
router.post('/api/showcase', upload.single('image'), async(req, res ,next) => {
  try{
     const addProduct = new showcase({
       title: req.body.title,
       discreption:req.body.discreption,
       product_id: req.body.product_id,
       bg_color: req.body.bg_color,
       image:req.file
     })
     const insertPtoduct =  await addProduct.save();
     res.status(201).send(insertPtoduct)
     
    
  }catch(e){
     res.status(400).send(e);
     console.log(e)
  }
})

//Mobile assessoris post data method
router.post('/api/assessoris', upload.array('image',4), async(req, res ,next) => {
  try{
     const addProduct = new assessoris({
       title: req.body.title,
       discreption:req.body.discreption,
       about: req.body.about,
       features: req.body.features,
       image:req.files
     })
     const insertPtoduct =  await addProduct.save();
     res.status(201).send(insertPtoduct)
     
    
  }catch(e){
     res.status(400).send(e);
     console.log(e)
  }
})

//hygiene post data method
router.post('/api/hygiene', upload.array('image',4), async(req, res ,next) => {
  try{
     const addProduct = new hygiene({
       title: req.body.title,
       discreption:req.body.discreption,
       about: req.body.about,
       features: req.body.features,
       image:req.files
     })
     const insertPtoduct =  await addProduct.save();
     res.status(201).send(insertPtoduct)
     
    
  }catch(e){
     res.status(400).send(e);
     console.log(e)
  }
})

/*----------------update--------------*/

//topShowcase patch(update) data method
router.patch('/api/showcase/:id', async(req, res) => {
  try{
     const _id = req.params.id;
     const updateproduct = await showcase.findByIdAndUpdate(_id,req.body,{
       new:true
     });
     res.send(updateproduct);
  }catch(e){
     res.status(500).send(e);
  }
})

//mobile assessoris patch(update) data method
router.patch('/api/assessoris/:id', async(req, res) => {
  try{
     const _id = req.params.id;
     const updateproduct = await assessoris.findByIdAndUpdate(_id,req.body,{
       new:true
     });
     res.send(updateproduct);
  }catch(e){
     res.status(500).send(e);
  }
})

//hygiene patch(update) data method
router.patch('/api/hygiene/:id', async(req, res) => {
  try{
     const _id = req.params.id;
     const updateproduct = await hygiene.findByIdAndUpdate(_id,req.body,{
       new:true
     });
     res.send(updateproduct);
  }catch(e){
     res.status(500).send(e);
  }
})

/*---------------delete---------------*/

//topShowcase delete data method
router.delete('/api/showcase/:id', async(req, res) => {
  try{
     const Deleteproduct = await showcase.findByIdAndDelete(req.params.id);
     res.send(Deleteproduct);
  }catch(e){
     res.status(500).send(e);
  }
})

//mobile assessoris delete data method
router.delete('/api/assessoris/:id', async(req, res) => {
  try{
     const Deleteproduct = await assessoris.findByIdAndDelete(req.params.id);
     res.send(Deleteproduct);
  }catch(e){
     res.status(500).send(e);
  }
})


//hygiene delete data method
router.delete('/api/hygiene/:id', async(req, res) => {
  try{
     const Deleteproduct = await hygiene.findByIdAndDelete(req.params.id);
     res.send(Deleteproduct);
  }catch(e){
     res.status(500).send(e);
  }
})


module.exports = router;