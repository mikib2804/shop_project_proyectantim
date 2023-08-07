const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Customer=require('../models/customer');
const functions=require('../controllers/customers')
const bcrypt = require('bcrypt');
router.get('/', (req, res) => {
    console.log("get")
    Customer.find().then(data=>res.send(data)).catch(err=>console.log(err))
});

router.post('/', functions.loginCustomer)


module.exports = router;