import React from 'react';
import './login.css'
import { useNavigate } from "react-router-dom";
import Home from '../home';
import { Link } from 'react-router-dom';

class Login extends React.Component {
   
    constructor(props){
        super(props);
    this.state={
        email : '',
        pwd: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange =(e)=>{
        
        const {name, value} = e.target 
        this.setState({[name]:value});

    }

    handleSubmit =(event)=>{ 
        const {email, pwd} = this.state;
        console.log(email +"----"+pwd);
        localStorage.setItem('ticketId', -1);
        localStorage.setItem('historyId', -1);
        event.preventDefault(); 
    
    }

    render() { 
      const isLoggedIn = localStorage.getItem("IsLoggedIn");
      const role = localStorage.getItem("role");
      if(isLoggedIn === "false")
      {
        return <div className="login-wrapper">
        <h1>Welcome to ServeWell</h1>
        <form onSubmit ={this.handleSubmit}>
          <label className="m-2">
            <p>User Name</p>
            <input type="email" name ="email" placeholder="Enter Email..." required onChange={this.handleChange}/>
          </label>
          <label className="m-2">
            <p>Password</p>
            <input type="password" name="pwd" placeholder="Enter Password.." required onChange = {this.handleChange}/>
          </label>
          <div className="m-2">
            <button type="submit" >Login</button>
            <Link className="btn btn-secondary btn-sm m-2 float-end" role="button" to="/adduser" > Add User </Link>  
            </div>
        
        
        </form>
        </div>
      }
      else{
        return <div><Home></Home> </div>
      }
    }
}
 
export default Login; 