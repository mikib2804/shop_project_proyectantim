import React,{useEffect,useState} from 'react'
import "../home.css";
import NavBar from './NavBar';
import DataToDivBlocks from './DataToDivBlocks';
import axios from "axios";
function HomePage(logedUser,setLogedUser ) {
  const API_URL = 'http://localhost:3000/api/home';
  const [backehandData,setbackehandData]=useState([])
  const [ImageBackehandData,setImageBackehandData]=useState([])
  const [search, setSearch] = useState('');
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
            <NavBar backehandData={backehandData} search={search} setSearch={setSearch}  />
            <br></br>
            <br></br>
            <br></br>
        </div>
        <DataToDivBlocks data={backehandData} imageData={ImageBackehandData} search={search} setSearch={setSearch}  logedUser={logedUser} setLogedUser={setLogedUser} />
        <div id="footer"><p>Project@2023</p>
            </div>
        </>
  )
}

export default HomePage


