const Customer =  require('../models/customer');
const StoreItem = require('../models/item');
var router = express.Router();
// Assuming you have already connected to the MongoDB using mongoose

// Let's say you have the IDs of the customer and the purchased store item


Customer.findByIdAndUpdate(
  customerId,
  { $push: { purchasedItems: storeItemId } },
  { new: true },
  (err, updatedCustomer) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Customer with updated purchased items:', updatedCustomer);
  }
);
router.post('/prod', (req, res) => {
    const customerId = req.body.idCust;
    const storeItemId = req.body.idItem;
});
