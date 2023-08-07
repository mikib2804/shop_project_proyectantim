
import React, { useState,useEffect } from "react";
import { GoFileSubmodule } from "react-icons/go";
import { FaTrashAlt } from 'react-icons/fa';
import Display from "./Display";
import apiRequest from './ApiRequest';
import{FaRegUser} from 'react-icons/fa';
import { BrowserRouter as Router, Route,Switch,Link } from "react-router-dom";
import axios from "axios";

    const Register = ({ users,setUsers }) => {
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [password, setPassword] = useState('');
        const [eamil, setEmail] = useState('');
        const [address, setAddress] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [userName, setUserName] = useState('');
        const [curent, setCurent] = useState(false);
        const API_URL = 'http://localhost:3000/api/register';
        const [fetchError, setFetchError] = useState(null);
        
        const handleClick = (e) => {
            e.preventDefault();
            console.log("button clicked")
            console.log(firstName);
            firstName.trim().length !== 0*lastName.trim().length !== 0?(console.log('input value is NOT empty'),addUser(),setCurent(true)):console.log('input value is empty');
            //TODO
        }
        const refreshPage = ()=>{
            window.location.replace('/login');
         }
        const  addUser= async ()=> {
                // POST request using axios with set headers
                
                const myNewUser = { firstName, lastName,password, eamil: eamil,address,phoneNumber,userName};
                console.log(myNewUser);
                const listUsers = [...users, myNewUser];
                setUsers(listUsers);
                console.log(myNewUser);
                const response=axios.post(API_URL,  { myNewUser })
            }
            const handleDelete = (e) => {
                e.preventDefault();    
                const myNewUser = {firstName, lastName,password, email: eamil,address,phoneNumber};
                const reqUrl = `${API_URL}/${myNewUser.email}`;
                const response=axios.delete(reqUrl)
                if (response) {
                    console.log(response)
                  }
                  
            }
            return (
    
                <form className="container">
                <label className="input-label">
                <h2 className="heading">Registration</h2>
                <label htmlFor="firstName" className="input-label">firstName</label>  
                    <input className="input-box" type="text" 
                        id="message"
                        name="message"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        autoComplete="off" />
                </label>
                <label className="input-label" ><br></br>
                <label htmlFor="lastName" className="input-label">lastName</label>
                    <input className="input-box" type="text" 
                        id="message"
                        name="message"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        autoComplete="off" />
                </label>
        
                <label className="input-label" ><br></br>
                <label htmlFor="eamil" className="input-label">Eamil</label>
                    <input className="input-box" type="text" 
                        id="message"
                        name="message"
                        value={eamil}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off" />
                </label>
                <label className="input-label" ><br></br>
                <label htmlFor="address" className="input-label">Address</label>
                    <input className="input-box" type="text" 
                        id="message"
                        name="message"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        autoComplete="off" />
                </label>
                <label className="input-label" ><br></br>
                <label htmlFor="address" className="input-label">PhoneNumber</label>
                    <input className="input-box" type="text" 
                        id="message"
                        name="message"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        autoComplete="off" />
                </label>
                <label className="input-label" ><br></br>
                <label htmlFor="password" className="input-label">Password</label>
                    <input className="input-box" type="text" value={password}
                        id="message"
                        name="message"
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off" />
                </label>
                <label className="input-label" ><br></br>
                <label htmlFor="UserName" className="input-label">UserName</label>
                    <input className="input-box" type="text" 
                        id="message"
                        name="message"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        autoComplete="off" />
                </label>
                <GoFileSubmodule className="btn btn-primary" type="submit"
                  value="Submit" 
                  onClick={handleClick}
                  />
                  <br></br>
                  <FaRegUser
                        className="FaRegUserIcon"
                        onClick={refreshPage}
                        role="button"
                        tabIndex="0"
                        aria-label={`Delete`}
                        
                    />
                    <FaTrashAlt 
                         className="FaTrashAltIcon"
                        onClick={handleDelete}
                        role="button"
                        tabIndex="0"
                        aria-label={`Delete`}
                    />
                    <Display curent={curent}/>
                </form>
                
          )
        
    }
  

export default Register;