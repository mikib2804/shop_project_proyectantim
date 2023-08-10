import React from 'react';
import "../dataToDiv.css";
const DataToDivBlocks = ({ data }) => {
  return (
    <div className="div-blocks-container">
      {data.map((item, index) => (
        <div className="div-block" key={index}>
           <h2 className="item">{item.GenericName}</h2>
            <p className="item">{item.Name}</p>
            <p className="item">{item.Category}</p>
            <p className="item">{item.Price}</p>
        </div>
      ))}
    </div>
  );
};

export default DataToDivBlocks;
