const express = require('express');
const Customer =  require('../models/customer');
const StoreItem = require('../models/item');
var router = express.Router();
// Assuming you have already connected to the MongoDB using mongoose

// Let's say you have the IDs of the customer and the purchased store item

router.post('/', (req, res) => {
    console.log("hi");
    // const customerId = req.body.logedUser._id;
    // const storeItemId = req.body.item._id;

    // Customer.findByIdAndUpdate(
    //   customerId,
    //   { $push: { purchasedItems: storeItemId } },
    //   { new: true },
    //   (err, updatedCustomer) => {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //     console.log('Customer with updated purchased items:', updatedCustomer);
    //   }
    // );
});
module.exports = router;