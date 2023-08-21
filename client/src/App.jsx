import React,{useEffect,useState} from 'react'
import Display from './components/Display';
import {  BrowserRouter as Router, Link, Route, Routes,Outlet } from "react-router-dom";
import HomePage from './components/HomePage';
import InputLine from './components/InputLine';
import Register from './components/Register';
import "./App.css";
import AddFileToServer from './components/AddFileToServer';


function App() 
{
  const API_URL = 'http://localhost:3000/api/login';
  const [users, setUsers] = useState([]);
  const [logedUser, setLogedUser] = useState();
  useEffect(()=>{

    async function start() {
      const data = await fetch(API_URL, { method: 'GET' }).then(response => response.json())
      .then(data => {setUsers(data)}).catch((err) => console.log(err))
  }
  start();
    
  },[])

  return (
    <>
         {/* <Register users={users} setUsers={setUsers}/>  */}
         
         <Router>
          <Routes>
            <Route path="/home" element={ <HomePage logedUser={logedUser} setLogedUser={setLogedUser} />}/>
            <Route path="/login" element={<InputLine logedUser={logedUser} setLogedUser={setLogedUser}>  
            <Outlet />
              </InputLine>} >
              <Route path="home" element={<HomePage/>}/>   
            </Route>
            <Route path="/register" element={<Register  users={users} setUsers={setUsers}/>}/> 
            <Route path="/aploadFile" element={<AddFileToServer/>}/>
          </Routes>
         </Router>
    </>
  )
}

export default App;

