
import React, { useState,useEffect } from "react";
import { GoFileSubmodule } from "react-icons/go";
import { FaTrashAlt } from 'react-icons/fa';
import Display from "./Display";
import{FaRegUser} from 'react-icons/fa';
import axios from "axios";
import "../registerS.css"
import {useNavigate} from "react-router-dom"

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
const navigate=useNavigate();
const handleClick = (e) => {
    e.preventDefault();
    console.log("button clicked")
    console.log(firstName);
    firstName.trim().length !== 0*lastName.trim().length !== 0?(console.log('input value is NOT empty'),addUser(),setCurent(true)):console.log('input value is empty');
    //TODO
}
const refreshPage = ()=>{
    navigate('/login');
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
    <>

        <div className="container">
            <div className="registration-container">
                <h2 className="text-center mb-4">Registration</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Choose a username" required
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Choose a first name" required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Choose a last name" required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="eamil" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter your email" required
                        value={eamil}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">PhoneNumber</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter your phone number" required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        autoComplete="off" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="text" className="form-control" id="password" placeholder="Choose a password" required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Write your address" required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        autoComplete="off" />
                    </div>
                    <div className="buttonClass"><button className="btn btn-primary" type="submit" onClick={handleClick}><GoFileSubmodule/></button></div>
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
                
          )
        
    }
  

export default Register;