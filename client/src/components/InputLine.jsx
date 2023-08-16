//rafc
import React, { useState,useEffect } from "react";
import { GoFileSubmodule } from "react-icons/go";
import { FaTrashAlt } from 'react-icons/fa';
import Display from "./Display";
import{FaRegUser} from 'react-icons/fa';

import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from 'react-router-dom';
const InputLine = ({ users,setUsers }) => {
 
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [curent, setCurent] = useState(false);
    const API_URL = 'http://localhost:3000/api/login';

    const [fetchError, setFetchError] = useState(null);
    
    const handleClick = (e) => {
        e.preventDefault();
        console.log("button clicked")
        console.log(userName);
        userName.trim().length !== 0*password.trim().length !== 0?(console.log('input value is NOT empty'),setCurent(true)):console.log('input value is empty');
        //TODO
    }
    const checkUser=async(e)=>{
      e.preventDefault();
      const myNewUser = {password,userName};
      console.log(myNewUser);
      const response=await axios.post(API_URL,  { myNewUser })
      if(response){
        console.log(response.data.message)
        window.location.replace('/home');
      }
      else{
        console.log("no")
      }
    }
    
    const refreshPage = ()=>{
      window.location.replace('/register');
   }
    return (
    <>
      <div className="container">
        <div className="login-container">
            <h2 className="text-center mb-4">Login</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter your username" required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        autoComplete="off" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"/>
                </div>
                <div className="buttonClass">
                    <button type="submit" className="btn btn-primary w-100"
                      value="Submit" 
                      onClick={checkUser}>
                      <GoFileSubmodule />
                  </button>
                </div>
                <div className="registPage">
                    <FaRegUser
                      onClick={refreshPage}
                      className="FaRegUserIcon"
                      role="button"
                      tabIndex="0"
                      aria-label={`Route`}
                  />
                </div>

            </form>
        </div>
    </div>

</>








      
        // <form className="container">
        // <label className="input-label">
        // <h2 className="heading">Login</h2>
        // <label htmlFor="username" className="input-label">Username</label>  
        //     <input className="input-box" type="text" 
        //         id="message"
        //         name="message"
        //         value={userName}
        //         onChange={(e) => setUserName(e.target.value)}
        //         autoComplete="off" />
        // </label>
        // <label className="input-label" ><br></br>
        // <label htmlFor="password" className="input-label">Password</label>
        //     <input className="input-box" type="text" 
        //         id="message"
        //         name="message"
        //          value={password}
        //         onChange={(e) => setPassword(e.target.value)}
        //         autoComplete="off" />
        // </label>
        // <GoFileSubmodule className="btn btn-primary" type="submit"
        //   value="Submit" 
        //   onClick={checkUser}
        //   />
        //   <br></br>

        //       <Router>
             
        //       <FaRegUser
        //         onClick={refreshPage}
        //         className="FaRegUserIcon"
        //           role="button"
        //           tabIndex="0"
        //           aria-label={`Route`}
        //       />
              
        //       </Router>

        //     <Display curent={curent}/>
            
        // </form>
        
      );
      
}

export default InputLine










