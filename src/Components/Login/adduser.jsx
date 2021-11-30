import React from "react";

class AddUser extends React.Component {
    state={
        id: -1,
        Name:"",
        Email:"",
        Password:"",
        Role:""
       
    }

    handleChange =(e)=>{
        
        const {name, value} = e.target 
        this.setState({[name]:value});

    }

    handleSubmit =(event)=>{ 
        const {Name, Email, Password, Role} = this.state;
        console.log(Email +"----"+Password);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                Name: Name,
                Email: Email,
                Password: Password,
                Role:Role
            })
        };
        fetch('https://mt02n1vtk0.execute-api.us-east-2.amazonaws.com/ServeWell/user', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        
        event.preventDefault(); 
    
    }


    render() { 
        return <div className="login-wrapper">
        <h1>Welcome to ServeWell</h1>
        <form onSubmit ={this.handleSubmit}>
           
           
           <label className="m-2">
           <p>Name</p>
           <input type="text" name ="Name"  required  onChange={this.handleChange} />
           </label>
           <br></br>
           <label className="m-2">
           <p>Email</p>
           <input type="email" name ="Email"  required  onChange={this.handleChange} />
           </label>
           <br></br>
           <label className="m-2">
           <p>Password</p>
           <input type="password" name ="Password"  required  onChange={this.handleChange} />
           </label>
           <br></br>
           <label className="m-2">
           <p>Role</p>
         
           <select name = "Role"  onChange={this.handleChange}>
                    <option value="Admin" >Admin</option>
                    <option value="User" >User</option>
                    
                </select>

           </label>
           <br></br>
           <div className="m-2">
           <button type="submit" >Submit</button>
           </div>
       </form>
        </div>;
    }
}
 
export default AddUser;