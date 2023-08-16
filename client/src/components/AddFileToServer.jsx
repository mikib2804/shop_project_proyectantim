import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { MdAddHome } from "react-icons/md";

function AddFileToServer() {
    const API_URL = 'http://localhost:3000/api/home';
    const [file, setFile] = useState(null);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [products, setProducts] = useState([]);
    const [GenericName, setGenericName] = useState('');
    const [Name, setName] = useState('');
    const [Category, setCategory] = useState('');
    const [Amount, setAmount] = useState('');
    const [Price, setPrice] = useState('');
    const [Info, setInfo] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    const myNewProduct = { GenericName,Name,Category,Amount,Price,Info};
    const listUsers = [...products, myNewProduct];
    setProducts(listUsers);
    const formData = new FormData();
    for (const key in myNewProduct) {
      if (myNewProduct.hasOwnProperty(key)) {
        console.log( myNewProduct[key]);
        formData.append(key, myNewProduct[key]);
      }
    }
    formData.append('file', file);
    try {
      await axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("button To Add clicked")
    handleUpload()
}
  const refreshPage = ()=>{
    window.location.replace('/home');
    }
    function refreshSamePage(){
      window.location.reload();
  } 
  const fetchFiles = async () => {
    try {
      const response = await axios.get(`${API_URL}/`);
      console.log("data",response.data); // Check the received data in the console
      setUploadedFiles([response.data]);
      console.log(uploadedFiles);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };
  


    return (
      <div className="d-flex align-items-center justify-content-center min-vh-100">
      <div className="border p-4">
      <div className="mb-3">
              <label htmlFor="Category" className="form-label">Category</label>
              <input type="text" className="form-control" id="Category" placeholder="Choose a Category" required
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              autoComplete="off" />
          </div>
          <div className="mb-3">
              <label htmlFor="GenericName" className="form-label">GenericName</label>
              <input type="text" className="form-control" id="GenericName" placeholder="Choose a Generic Name" required
              value={GenericName}
              onChange={(e) => setGenericName(e.target.value)}
              autoComplete="off" />
          </div>
          <div className="mb-3">
              <label htmlFor="Name" className="form-label">Name</label>
              <input type="text" className="form-control" id="Name" placeholder="Choose a Name" required
              value={Name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off" />
          </div>
          <div className="mb-3">
              <label htmlFor="Price" className="form-label">Price</label>
              <input type="text" className="form-control" id="Name" placeholder="Choose a Price" required
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
              autoComplete="off" />
          </div>
          <div className="mb-3">
              <label htmlFor="Amount" className="form-label">Amount</label>
              <input type="text" className="form-control" id="Amount" placeholder="Enter your Amount" required
              value={Amount}
              onChange={(e) => setAmount(e.target.value)}
              autoComplete="off" />
          </div>
          <div className="mb-3">
              <label htmlFor="Amount" className="form-label ">Information</label>
              <input type="text" className="form-control " id="Amount" placeholder="Enter product information" required
              value={Info}
              onChange={(e) => setInfo(e.target.value)}
              autoComplete="off" />
          </div>
          <h1 className="mb-4 text-center">ADD Image</h1>
          <h3 className="text-center">Upload File Here to send the server</h3>
          <div className="mt-4 text-center">
            {/* {this is gets the atach of the file} */}
              <input className="form-control-file mb-3" type="file" onChange={handleFileChange} />
              <div className="buttonClass"><button className="btn btn-primary" type="submit" onClick={handleClick}> Upload!</button></div>
              <br></br>
              <button type="submit" className="btn btn-primary w-50"
                  value="Submit"  
                  onClick={ refreshPage}                       
                  role="button"
                  tabIndex="0"
                  aria-label={`Route`}>
                  <MdAddHome/>
            </button>
            <button type="submit" className="btn btn-primary w-50"
                  value="Submit"                       
                  role="button"
                  tabIndex="0"
                  onClick={fetchFiles}
                  aria-label={`Route`}>
                  file
                 
            </button>
          </div>
          {uploadedFiles.length ? 
            uploadedFiles[0].map((file, index) => (
              file.GenericName===GenericName
              ? (<div className="div-block" key={index}>        
                <img
                  src={`data:image/jpeg;base64,${file.buffer}`}
                  alt={file.originalname}
                  style={{ maxWidth: '100px', maxHeight: '100px' }}
                />
              </div>) : null
      )) : null}
              <br></br>
      <div className='d-flex  justify-content-center'>
      <button type="submit" className=" btn btn-primary w-50"
                  value="Submit"                       
                  role="button"
                  tabIndex="0"
                  onClick={refreshSamePage}
                  aria-label={`Route`}>
                  Next Product
            </button>
      </div>

      </div>
  </div>
    );
}

export default AddFileToServer;
