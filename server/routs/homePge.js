const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const StoreItem=require('../models/item');
const functions=require('../controllers/images')
const multer  = require('multer')
const Upload = require("../models/image");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/', (req, res) => {
    console.log("get")
    StoreItem.find().then(data=>res.send(data)).catch(err=>console.log(err))
});




router.post('/upload', upload.single('file'), async (req, res) => {
  StoreItem.findOne().then((image) => {
    console.log("image",image);
    res.json(image.buffer.toString("base64"));
  }).catch((err)=>{console.log(err)});
  req.file.buffer=req.file.buffer.toString("base64");
  console.log( req.file.buffer);
  const file = req.file;
  //console.log("mendi",req.body.GenericName);
  if (!file) {
    res.status(400).send('No file uploaded.');
    return;
  }
  const newFile = new StoreItem({
    GenericName:req.body.GenericName,
    Name:req.body.Name,
    Category:req.body.Category,
    Amount:req.body.Amount,
    phoneNumber:req.body.phoneNumber,
    Price:req.body.Price,
    Info:req.body.Info,
    originalname:file.originalname,
    mimetype:file.mimetype,
    buffer:file.buffer,
  });
  try {
    await newFile.save();
    //console.log('File uploaded:', newFile);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send('Error uploading file.');
  }
  
});



module.exports = router;
