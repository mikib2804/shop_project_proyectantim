const mongoose=require('mongoose')
module.exports= mongoose.model('Customer',{
    firstName:{type:String},
    lastName:{type:String},
    userName:{type:String},
    eamil:{type:String},
    address:{type:String},
    phoneNumber:{type:Number},
    password:{type:String},
    orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
})