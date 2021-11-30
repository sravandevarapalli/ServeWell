import React from 'react'; 
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  handleLogout =()=>{ 
    
        localStorage.setItem('IsLoggedIn', false);
        localStorage.setItem('email', "" );
        localStorage.setItem('user', "" );
        localStorage.setItem('role', "");
        localStorage.setItem('ticketId', -1);
        localStorage.setItem('historyId', -1);
    } 

    handleNewTicket=()=>{
      localStorage.setItem('ticketId', -1);
    }
    

    render() { 
        // const [isAuth, setIsAuth] = useState(true);

        // if(!isAuth){
        //     return <Navigate to = "/Login/login"></Navigate>
        // }

        return <div>
             <div className= "text-center"> Welcome to ServeWell </div>
            <div>
            {/* <button className="btn btn-secondary btn-sm m-2">Home</button>
            <button  className="btn btn-secondary btn-sm m-2">Create Ticket</button> */}
            <Link className="btn btn-secondary btn-sm m-2" role="button" to="/"   > Home </Link>
            <Link className="btn btn-secondary btn-sm m-2" role="button" to="/ticket/-1" onClick={this.handleNewTicket}> Create Ticket </Link>
     
            <Link className="btn btn-secondary btn-sm m-2 float-end" role="button" to="/login" onClick={this.handleLogout}> Logout </Link> 
          </div>  
        </div>;
    }
}
 
export default NavBar;