const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser'); // Fix the variable name spelling
const connectDb = require('./db');
const app = express();
const routs=require('./routs/indexRouts');
app.use(bodyParser.json()); // Fix the variable name spelling
app.use(cors());
app.use('/api',routs);

connectDb()
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
    app.listen(3000, () => {
      console.log("APP IS LISTENING ON PORT 3000!")
    });
  })
  .catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
  });