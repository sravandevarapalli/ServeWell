import React from 'react';
import { useNavigate } from 'react-router-dom'
// import history from '../history';
import { Link } from 'react-router-dom';


class UserProxy extends React.Component {

    constructor(){
        super();
        this.state={
            user: "",
            role:"",
            email:"",
            UserData:[],
            IsLoggedIn:false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit =()=>{ 
        if(this.state.user !== "0" && this.state.user !== "")
        {
            console.log(this.state.user); 
            this.setState({IsLoggedIn:true});
 
            localStorage.setItem('IsLoggedIn', true);
            localStorage.setItem('email', this.state.email );
            localStorage.setItem('user', this.state.user );
            localStorage.setItem('role', this.state.role );
            localStorage.setItem('ticketId', -1);
            localStorage.setItem('historyId', -1);
        } 
    }


    handleChange =(event)=>{
        const {name, value} = event.target 
        if(value == "0")
        {
      
        }
        else{
            this.setState({[name]:value});
                 var index = event.target.selectedIndex;
            var optionElement = event.target.childNodes[index]
            var userRole =  optionElement.getAttribute('role');
            var userEmail =  optionElement.getAttribute('email');
            this.setState({ role: userRole });
            this.setState({ email: userEmail });
        }
      

    }

    componentDidMount() {
       
        fetch( 'https://mt02n1vtk0.execute-api.us-east-2.amazonaws.com/ServeWell/user', {
            method: 'GET',
           
        } )
        .then(res => res.json())
        .then((data) => {  
          this.setState({ UserData: data }) 
        })
        .catch(console.log)
    } 

    render() { 
        return <div>
            <label className="m-2">
                Select User <span />
                <select name= "user"  onChange={this.handleChange}>
                <option value="0"  >--select user--</option>
                    { this.state.UserData.map(usr => ( <option key={usr.Id} value={usr.Name} email={usr.Email} role={usr.Role} >{usr.Name +"-->"+usr.Role}</option>))}
                   
                  
                </select>
                </label>
                {/* <button  onClick={()=>this.handleSubmit()}>Submit</button> */}

                <Link className="btn btn-secondary btn-sm m-2" role="button" to="/" onClick={()=>this.handleSubmit()}  > Login </Link>
        </div>;
    }
}
 
export default UserProxy;