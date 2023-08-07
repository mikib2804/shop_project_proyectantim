const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Customer=require('../models/customer');
const functions=require('../controllers/customers')
const bcrypt = require('bcrypt');
const ObjectId = mongoose.Types.ObjectId;
router.get('/', (req, res) => {
    console.log("get")
    Customer.find().then(data=>res.send(data)).catch(err=>console.log(err))
});

router.post('/', async(req, res) => {
    const newUser=req.body.myNewUser;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
    console.log('Hashed Password:', hashedPassword);
    newUser.password = hashedPassword;
    console.log('newUser:', newUser);
    Customer.create(newUser).then(data=>res.send(data)).catch(err=>console.log(err))
    
});

router.delete('/:email',functions.deleteCustomer)
module.exports = router;