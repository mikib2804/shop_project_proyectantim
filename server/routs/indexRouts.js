const express = require('express');
var router = express.Router();
const registration=require('./registration')
const login=require('./login')
const products=require('./addProd')
const homePge=require('./homePge')

router.use("/home/prod",products)
router.use("/register",registration)
router.use("/home",homePge)
router.use("/login",login)
module.exports=router;