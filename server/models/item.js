const mongoose=require('mongoose')
module.exports= mongoose.model('StoreItem',{
    GenericName:{type:String},
    lastName:{type:String},
    Name:{type:String},
    Category:{type:String},
    Amount:{type:Number},
    phoneNumber:{type:Number},
    Price:{type:Number},
    Info:{type:String},

    originalname:{type:String},
    mimetype:{type:String},
    buffer:{type:String},
})