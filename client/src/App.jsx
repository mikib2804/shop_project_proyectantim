import React,{useEffect,useState} from 'react'
import Display from './components/Display';
import {
  BrowserRouter as Router,
  
  Switch,
  Route,
} from "react-router-dom";
import InputLine from './components/InputLine';
import ApiRequest from './components/ApiRequest';
import Register from './components/register';
import "./App.css";


function App() 
{
  const API_URL = 'http://localhost:3000/api/login';
  const [backehandData,setbackehandData]=useState([{}])
  const [users, setUsers] = useState([]);
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
          <Switch>
            <Route path="/login" >
              <InputLine/>
            </Route>
            <Route path="/register">
              <Register  users={users} setUsers={setUsers}/>
            </Route>
            
          </Switch>
         </Router>
    </>
  )
}

export default App;

