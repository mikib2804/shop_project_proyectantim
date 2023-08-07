const express = require('express');
var router = express.Router();
const registration=require('./registration')
const login=require('./login')
router.use("/register",registration)
router.use("/login",login)
module.exports=router;