const express = require('express');
const Customer =  require('../models/customer');
const StoreItem = require('../models/item');
const Order=require('../models/orders');
var router = express.Router();

router.get ('/customer', async (req, res) => {
    console.log("i get",);
    Customer.find().then(data=>res.send(data)).catch(err=>console.log(err))
});
router.get ('/order/:id', async (req, res) => {
    const id=req.params.id;
    console.log("i get",);
    Order.find({userId:id}).then(data=>res.send(data)).catch(err=>console.log(err))
});
router.post ('/', async (req, res) => {
    //console.log("hi feom client : ",req.body.User);
    console.log(req.body.dataToServer[0].IdIt)
    const products=await req.body.dataToServer.map((data,index)=>{
        //console.log(req.body.dataToServer[index].IdIt);
       return (req.body.dataToServer[index].IdIt);
    });
    console.log(products);
    const newOrder = new Order({
        userId:req.body.User.idOfUser,
        userName:req.body.User.LogeduserName,
        totalPrice:req.body.User.orderSum,
        address:req.body.User.addressOfUser,
        purchasedItems:products,
      });try {
        await newOrder.save().then(order => {
            return Customer.findById(req.body.User.idOfUser);
        })
        .then(customer => {
            if (!customer) {
                throw new Error('Customer not found');
            }
            else{
                customer.orderHistory.push(newOrder._id);
                return customer.save(); 
            }
        });
        res.sendStatus(200);
      } catch (error) {
        console.error('Error saving a user data:', error);
        res.status(500).send('Error saving a user data.');
      }

});
module.exports = router;