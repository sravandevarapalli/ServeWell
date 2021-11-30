import React from "react";
import NavBar from "./nav";
import Tickets from "./tickets"; 
import Login from "./Login/login";

class Home extends React.Component {

    constructor(){
        super()
        if (!localStorage["IsLoggedIn"]) {
        
        localStorage.setItem('IsLoggedIn', false);
        localStorage.setItem('email', "" );
        localStorage.setItem('user', "");
        localStorage.setItem('role', "" );
        localStorage.setItem('ticketId', -1);
        localStorage.setItem('historyId', -1);
        }
      
    }

    render() { 
 
      
      const isLoggedIn = localStorage.getItem("IsLoggedIn"); 

      if(isLoggedIn === "true")
      {
        return <div>  
         
          <NavBar/>
       
        <div>
          <Tickets></Tickets>
        </div>
        </div>;
        }
        else{
          return <div>
            <Login></Login>
          </div>
        }



    
    }
}
 
export default Home;