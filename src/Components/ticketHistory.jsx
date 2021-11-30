import React from "react";
import NavBar from "./nav";
import { useState } from 'react';
// import { useParams } from "react-router-dom";
import Login from "./Login/login";


class TicketHistory extends React.Component {

    state={
        id:-1,
        HistoryLog:[]
    }

    


    componentDidMount() {
        const ticketId = parseInt(localStorage.getItem("historyId"));

        this.setState({id:ticketId})
      
        if(ticketId >0)
        {
        fetch( 'https://mt02n1vtk0.execute-api.us-east-2.amazonaws.com/ServeWell/tickethistory?ticketid='+ticketId, {
            method: 'GET',
           
        } )
        .then(res => res.json())
        .then((data) => { 
            console.log(data.Id);
          this.setState({ HistoryLog: data })
        })
        .catch(console.log)
    }
     
    }

    render() { 
        const isLoggedIn = localStorage.getItem("IsLoggedIn");
        const role = localStorage.getItem("role");
        if(isLoggedIn)
        {
        if(this.state.id >0)
        {
        return <div className="app-container">
              <NavBar/>
             
        {/* {this.state.tickets.map(t => <Ticket key ={t.Id} value= {t} ></Ticket>)} */}
        <table>
            <thead>
                <tr>
                    <th>Log Id</th>
                    <th>User</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>Updated By</th>
                    <th>Description</th> 
                    <th>Date Time</th> 
                </tr>
            </thead>
            <tbody>
                {this.state.HistoryLog.map(tckt => (

                    <tr>
                    <td>{tckt.Id}</td>
                    <td>{tckt.User}</td>
                    <td>{tckt.Type}</td>
                    <td>{tckt.Status}</td>
                    <td>{tckt.UpdatedBy}</td>
                    <td>{tckt.Description}</td>
                    <td>{tckt.TimeStamp}</td>
                    </tr>
                ))}
               
            </tbody>
        </table>
    </div>;
        }
        else{
          return  <div className="app-container">  <NavBar/>   
         No data found</div>
        }
    }
    else{
      return <div>
        <Login></Login>
      </div>
    }
    }
}
 
export default TicketHistory;