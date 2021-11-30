import React from "react";
import NavBar from "./nav";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from "./Login/login";
import {withRouter} from 'react-router-dom';
// import { useParams } from 'react-router-dom';

class AddorEditTicket extends React.Component {

   // {"Id":50,"User":"Shiva","UpdatedBy":"Sravan","Type":"HR","Status":"Open","Description":"Test CORS"}
 
 
    state={
        id: -1,
        type:"",
        status:"Created",
        updatedBy:"",
        description:"",
        user:"",
        TicketData:{},
        hasData:false
    }


    handleChange =(e)=>{
        
        const {name, value} = e.target;
        this.setState({[name]:value}) 
    }

    componentDidMount() {
 
        const isLoggedIn = localStorage.getItem("IsLoggedIn");
        const email = localStorage.getItem("email");
        const role = localStorage.getItem("role");
        const user = localStorage.getItem("user");
        const ticketId = parseInt(localStorage.getItem("ticketId"));
        this.setState({id:parseInt(ticketId)})
        this.setState({user: email})
        if(ticketId >0  )
        {
        fetch( 'https://mt02n1vtk0.execute-api.us-east-2.amazonaws.com/ServeWell/ticket?id='+ticketId+"&email="+email, {
            method: 'GET',
           
        } )
        .then(res => res.json())
        .then((data) => {  
            if(data.length>0){
                this.setState({ hasData:true})
          this.setState({ TicketData: data[0], id:data[0].Id, type : data[0].Type, status: data[0].Status, updatedBy: data[0].UpdatedBy, description: data[0].Description, user: data[0].User})  
            }
            else{
                this.setState({ hasData:false})
            }

        })
        .catch(console.log)
    }
     
    }

    handleSubmit =(event)=>{ 
        const {user, status, updatedBy, description, type, id} = this.state; 

        //const isLoggedIn = localStorage.getItem("IsLoggedIn");
        const lgemail = localStorage.getItem("email"); 

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                Id: id==-1?null:id,
              User: id==-1?lgemail :user,
              Type: type,
              Status: status,
              Description: description,
              UpdatedBy: lgemail

            })
        };
        fetch('https://mt02n1vtk0.execute-api.us-east-2.amazonaws.com/ServeWell/ticket', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        
        //event.preventDefault(); 
    
    } 

    render() { 
        const isLoggedIn = localStorage.getItem("IsLoggedIn");
        const role = localStorage.getItem("role");
        if(isLoggedIn === "true")
        {
        return (
        <div>
            <NavBar/>
            {/* <form > */}
           
                {this.state.hasData &&(
                <><label className="m-2">
                            <p>ID</p>
                            <input type="text" name="id" value={this.state.id} readOnly />
                        </label><br></br><label className="m-2">
                                <p>User</p>
                                <input type="text" name="user" value={this.state.user} readOnly />
                            </label><br></br></>)
                }
                <label className="m-2">
                <p>Type</p>
                <input type="text" name ="type" value={this.state.type} required  onChange={this.handleChange}/>
                </label>
                <br></br>
                <label className="m-2">
                <p>Status</p>
                <select name = "status" value={(this.state.hasData ?this.state.status :"Created")||""} onChange={this.handleChange}>
                    <option value="Created" disabled ={this.state.hasData} >Created</option>
                    <option value="Reviewed" disabled ={!this.state.hasData}>Reviewed</option>
                    <option value="In-Progress" disabled ={!this.state.hasData}>In-Progress</option>
                    <option value="On-Hold" disabled ={!this.state.hasData}>On-Hold</option>
                    <option value="Completed" disabled ={!this.state.hasData}>Completed</option>
                    <option value="Resolved" disabled ={!this.state.hasData}>Resolved</option>
                    <option value="Re-Open" disabled ={!this.state.hasData}>Re-Open</option>
                    <option value="Closed" disabled ={!this.state.hasData}>Closed</option>
                    <option value="Deleted" disabled ={!this.state.hasData}>Deleted</option>
                </select>
                </label>
                <br></br>
                {this.state.hasData &&(
                <label className="m-2">
                    <p>Updated By</p>
                    <input type="text" name="updatedBy" value={this.state.updatedBy} readOnly />
                </label>)}

                <br></br>
                <label className="m-2">
                <p>Description</p>
                <input type="textarea" name="description"  value= {this.state.description || ""} required  onChange={this.handleChange}/>
                </label>
                <br></br>
                <div className="m-2">
                {/* <button type="submit" >Submit</button> */}
                <Link className="btn btn-secondary btn-sm"  role="button" to="/" onClick ={this.handleSubmit}> Submit </Link> 
                </div>
            {/* </form> */}

        </div>)}
           else{
            return <div>
              <Login></Login>
            </div>
          } 
    }
}
 
export default AddorEditTicket;