
const Upload = require("../models/image");

const responseData = {
    message: 'Successfully uploaded files',
  };
exports.uploadFiles =async(req,res)=>{
    console.log(req.file.fieldname);
    console.log(req.file);
    console.log('newFile:', req.file);
    Upload.create(req.file).then(data=>res.send(data)).catch(err=>console.log(err))
  }