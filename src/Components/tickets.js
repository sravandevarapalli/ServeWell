import React from "react"; 
import "./tickets.css"
import { Link } from 'react-router-dom';

class Tickets extends React.Component {

    state ={
        tickets:[]
    }

      // {"Id":50,"User":"Shiva","UpdatedBy":"Sravan","Type":"HR","Status":"Open","Description":"Test CORS"}

    componentDidMount() {
        const isLoggedIn = localStorage.getItem("IsLoggedIn");
        const email = localStorage.getItem("email");
        const role = localStorage.getItem("role");
      
        var apiURL ="";

        if(role ==="Admin")
        {
            apiURL ="https://mt02n1vtk0.execute-api.us-east-2.amazonaws.com/ServeWell/ticket?id=-1";
        }
        else{
            apiURL ="https://mt02n1vtk0.execute-api.us-east-2.amazonaws.com/ServeWell/ticket?email="+email;
        }
        fetch( apiURL ,{
            method: 'GET'
        } )
        .then(res => res.json())
        .then((data) => {  
          this.setState({ tickets: data })
        })
        .catch(console.log)
    }

    handleNavigateToTicket=(e)=>{
       
        const v= e.target.getAttribute('value') 
        localStorage.setItem('ticketId', v);
    }

    handleNavigateToHistory =(e) =>{
         
        const v= e.target.getAttribute('value') 
        localStorage.setItem('historyId', v);
    }

    render() { 
        const isLoggedIn = localStorage.getItem("IsLoggedIn");
        const role = localStorage.getItem("role");
        const isAdmin = isLoggedIn && role ==="Admin";
        if(this.state.tickets.length !== 0){
        return <div className="app-container">
            
            {/* {this.state.tickets.map(t => <Ticket key ={t.Id} value= {t} ></Ticket>)} */}
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Updated By</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tickets.map(tckt => (

                        <tr>
                        <td>{tckt.Id}</td>
                        <td>{tckt.User}</td>
                        <td>{tckt.Type}</td>
                        <td>{tckt.Status}</td>
                        <td>{tckt.UpdatedBy}</td>
                        <td>{tckt.Description}</td>
                        <td> { isAdmin &&( <Link name="ticketId" value={tckt.Id} className="btn btn-secondary btn-sm m-2" role="button" to={"/ticket/"+ tckt.Id} onClick={this.handleNavigateToTicket} > Edit </Link>)}
                            
                        <span/>
                        <Link className="btn btn-secondary btn-sm m-2" name="historyId" value={tckt.Id} role="button" to={"/history/"+ tckt.Id} onClick={this.handleNavigateToHistory}> Log </Link>
                        </td>
                        </tr>
                    ))}
                   
                </tbody>
            </table>
        </div>;
        }
        else{
            return <div> No Tickets Found</div>
        }
    }
}
 
export default Tickets;