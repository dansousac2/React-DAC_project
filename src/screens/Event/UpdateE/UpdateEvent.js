import React from "react";
import './UpdateEvent.css'
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";

export default class CreateEvent extends React.Component {
    state = {
        eventName:"",
        date:"",
        address:"",

        eventName2:"",
        date2:"",
        address2:""
    }
    
    
    
    post = () => {
        console.log("Event name = " + this.state.eventName + " Event Date: " + this.state.date + " Event Address: " + this.state.address);
        this.setState({eventName2:this.state.eventName, date2: this.state.date, address2: this.state.address})
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend><h2>Update Event</h2></legend>
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
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.post} >Update</button>
                </fieldset>
                <br/>
                <br/>
                <br/>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Field</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr class="table-primary">
                            <th scope="row">Event</th>
                            <td>{this.state.eventName2}</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">Date</th>
                            <td>{this.state.date2}</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">Address</th>
                            <td>{this.state.address2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}