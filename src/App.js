import React,{useState} from 'react';
import Home from './Components/home';
import Tickets from './Components/tickets';
import AddorEditTicket from './Components/addEditTicket';
import { Routes ,Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login';
import TicketHistory from './Components/ticketHistory';
import UserProxy from './Components/Login/UserProxy';
import AddUser from './Components/Login/adduser';
//import {createBrowserHistory } from 'history';

function App() {
  //const history = createBrowserHistory({forceRefresh:true});

  // if(!token)
  // {
  //   return <Login setToken= {setToken}></Login>
  // }

  // const loginUser ={
  //   email: "test@test.com",
  //   password :"1234"
  // }

  // const [user, setUser] = useState({name: "", email:""});
  // const [error, setError] = useState("");

  // const Login = details =>{
  //   console.log(details);

  // }

  // const Logout =() =>{
  //   console.log("logout");
  // }


  return (
    

    <Routes  >  
      <Route exact path="/" element ={<Home/>} /> 
      <Route exact path="/login" element={<Login></Login>} />
      <Route exact path="/tickets" element={<Tickets/>} />  n
     
      <Route exact path="/ticket/:id" element={<AddorEditTicket/>} /> 
      <Route exact path="/history/:id" element={<TicketHistory/>} /> 
      <Route exact path="/userproxy" element={<UserProxy/>} /> 
      <Route exact path="/adduser" element={<AddUser/>} /> 
      </Routes> 
 
  );
}

export default App;
