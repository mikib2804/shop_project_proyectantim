import React,{useEffect,useState} from 'react'
import "../home.css";
import NavBar from './NavBar';
import DataToDivBlocks from './DataToDivBlocks';
import axios from "axios";
function HomePage() {
  const API_URL = 'http://localhost:3000/api/home';
  const [backehandData,setbackehandData]=useState([])
  const [ImageBackehandData,setImageBackehandData]=useState([])
  useEffect(()=>{
    async function start() {
      const data = await fetch(API_URL, { method: 'GET' }).then(response => response.json())
      .then(data => {setbackehandData(data)}).catch((err) => console.log(err))
  }
  start();
  },[])
   
  console.log(ImageBackehandData)
  return (
    <>
    
        <div id="container" >
            <NavBar backehandData={backehandData} />
            <br></br>
            <br></br>
            <br></br>
        </div>
        <DataToDivBlocks data={backehandData} imageData={ImageBackehandData} />
        <div id="footer"><p>Project@2023</p>
            </div>
        </>
  )
}

export default HomePage


