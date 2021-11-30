import React from "react";
import NavBar from "./nav";
import Tickets from "./tickets";
import AddorEditTicket from "./addEditTicket";

import { userNavigate } from "react-router-dom";
import Login from "./Login/login";

class Home extends React.Component {

 

    render() { 
      const isLoggedIn = localStorage.getItem("IsLoggedIn");
      const role = localStorage.getItem("role");

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