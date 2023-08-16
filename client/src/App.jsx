import React,{useEffect,useState} from 'react'
import Display from './components/Display';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './components/HomePage';
import InputLine from './components/InputLine';
import Register from './components/Register';
import "./App.css";
import AddFileToServer from './components/AddFileToServer';


function App() 
{
  const API_URL = 'http://localhost:3000/api/login';
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
            <Route path="/home">
              <HomePage/>
            </Route>
            <Route path="/login" >
              <InputLine>
                <Route path="/home">
                  <HomePage/>
              </Route>
              </InputLine>
            </Route>
            <Route path="/register">
              <Register  users={users} setUsers={setUsers}/>
            </Route>
            <Route path="/aploadFile">
              <AddFileToServer />
            </Route>
          </Switch>
         </Router>
    </>
  )
}

export default App;

