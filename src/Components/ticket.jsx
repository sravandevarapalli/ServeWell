import React  from 'react'; 
class Ticket  extends React.Component {

    state={
        value: this.props.value
    }

    handleEdit =() =>{
        // let navigate = userNavigate(); 

        // return <AddorEditTicket navigate={navigate} />
    }

    render() { 
        return <div>
           
            <span className="m-2">{this.state.value.Id}</span>
            <span className="m-2"> {this.state.value.User}</span>
            <span className="m-2">{this.state.value.Status}</span>
            <span className="m-2">{this.state.value.DateTime}</span>
            <button onClick={this.handleEdit} className="btn btn-secondary btn-sm m-2">Edit</button>
            <button onClick={this.handleHistory} className="btn btn-secondary btn-sm m-2">Log</button>
       
        </div>;
    }
}
 
export default Ticket;