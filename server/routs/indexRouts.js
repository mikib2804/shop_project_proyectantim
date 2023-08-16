const express = require('express');
var router = express.Router();
const registration=require('./registration')
const login=require('./login')
const homePge=require('./homePge')
router.use("/register",registration)
router.use("/home",homePge)
router.use("/login",login)
module.exports=router;