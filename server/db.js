const mongoose=require('mongoose')
const MONGO_URI='mongodb://127.0.0.1:27017/employee_db'
module.exports=()=>{
    return mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
}

