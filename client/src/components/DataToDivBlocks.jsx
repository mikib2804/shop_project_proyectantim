import React from 'react';
import "../dataToDiv.css";
import {BsFillInfoCircleFill} from "react-icons/bs";
import Swal from 'sweetalert2';
const DataToDivBlocks = ({ data,imageData }) => {
  console.log(data[0])
  return (
    <div className="div-blocks-container ">
      {data.map((item, index) => (
        <div className="d-flex justify-content-center div-block " key={index}>  
        <button type="button" className="btn btn-light ml-4"  onClick={() => {
            Swal.fire({
              icon: 'info',
              title: item.GenericName,
              text:item.Info,
              showConfirmButton: false,
              showCloseButton: true,
            })
        }} >
          <BsFillInfoCircleFill/>
      </button >
        <div>
        <h2 className="item">{`${item.GenericName}`}</h2>
        <div className='centerize'>
          <img
                src={`data:image/jpeg;base64,${item.buffer}`}
                alt={imageData.originalname}
                style={{ maxWidth: '100px', maxHeight: '100px' }}
              />  
          </div>
            
            
            <p className="item text-wrap">{`Name: ${item.Name}`}</p>
            <p className="item">{`Category: ${item.Category}`}</p>
            <p className="item">{`Price: ${item.Price}${isNaN(item.Price)?"₪":".0₪"}`}</p>
        </div>
        
        </div>
      ))}
    </div>
  );
};

export default DataToDivBlocks;
