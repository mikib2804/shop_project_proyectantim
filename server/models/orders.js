const mongoose=require('mongoose')
module.exports= mongoose.model('Order',{
    userId:{type:mongoose.Schema.Types.ObjectId},
    userName:{type:String},
    totalPrice:{type:Number},
    address:{type:String},
    purchasedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'StoreItem' }],
})