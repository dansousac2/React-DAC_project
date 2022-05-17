import React from "react";
import './CreateEvent.css'
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";

export default class CreateEvent extends React.Component {
    state = {
        eventName:"",
        date:"",
        address:""
    }
    
    
    
    post = () => {
        console.log("Event name = " + this.state.eventName + " Event Date: " + this.state.date + " Event Address: " + this.state.address);
        alert("Event created!")
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <fieldset>
                        <legend><h2>Create Event</h2></legend>
                        <FormGroup label='Event Name' htmlFor='lab01'>
                            <input className="form-control form-control-lg" type="text" placeholder="name" id="lab01"
                            onChange={(e) => {this.setState({eventName: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Event Date' htmlFor='lab02'>
                            <input className="form-control form-control-lg" type="text" placeholder="date" id="lab02"
                            onChange={(e) => {this.setState({date: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Event Address' htmlFor='lab03'>
                            <input className="form-control form-control-lg" type="text" placeholder="address" id="lab03"
                            onChange={(e) => {this.setState({address: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.post} >Create</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}