const Customer=require('../models/customer');
const bcrypt = require('bcrypt');

exports.deleteCustomer=(req,res)=>{
    const email=req.params.email;
    console.log(email);
   Customer.findOne({eamil:email}).then((user)=>
    {   if(user){
        console.log(user)
        user.deleteOne({eamil: email})
    }
    else{
        console.log("user null")
    }
    })

   //console.log(product)
}
const responseData = {
    message: 'THE SERVER FOUND THE USER',
  };
  
exports.loginCustomer= async(req,res)=>{
    const newUser=req.body.myNewUser;
    console.log(newUser)
    const userName1=newUser.userName;
    const user=await Customer.findOne({userName:userName1})
    const enteredPassword = newUser.password;
    const storedHashedPassword = user.password; 
    bcrypt.compare(enteredPassword, storedHashedPassword, function(err, result) {
        if (err) {
          console.error('Error comparing passwords:', err);
        } else if (result) {
          console.log('Password matches!'); 
          res.json(responseData);
        } else {
          console.log('Invalid password.');
        }
      });
   
}
