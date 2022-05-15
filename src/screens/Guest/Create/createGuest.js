import React from "react";
import './CreateGuest.css';
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";

export default class CreateGuest extends React.PureComponent {

    state = {
        guestName:"",
        guestCPF:"",
        eventID:"",

        guestName2:"",
        guestCPF2:"",
        eventID2:""
    }
    
    
    
    post = () => {
        console.log("Guest name = " + this.state.guestName + " Guest CPF: " + this.state.guestCPF + " Event ID: " + this.state.eventID);
        this.setState({guestName2:this.state.guestName, guestCPF2: this.state.guestCPF, eventID2: this.state.eventID})
    }

    render() {
        return (
            <div>
                <fieldset>
                    <legend>Create New Guest</legend>
                    <FormGroup label='Guest Name' htmlFor='lab01'>
                        <input className="form-control form-control-lg" type="text" placeholder="name" id="lab01"
                        value={this.state.guestName} onChange={(e) => {this.setState({guestName: e.target.value})}}/>
                    </FormGroup>
                    <FormGroup label='CPF' htmlFor='lab02'>
                        <input className="form-control form-control-lg" type="text" placeholder="CPF" id="lab02"
                        value={this.state.guestCPF} onChange={(e) => {this.setState({guestCPF: e.target.value})}}/>
                    </FormGroup>
                    <FormGroup label='Event ID' htmlFor='lab03'>
                        <input className="form-control form-control-lg" type="text" placeholder="event id" id="lab03"
                        value={this.state.eventID} onChange={(e) => {this.setState({eventID: e.target.value})}}/>
                    </FormGroup>
                    <br/>
                    <button type="button" className="btn btn-primary btn-lg" onClick={this.post} >Create Guest</button>
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
                            <th scope="row">Name</th>
                            <td>{this.state.guestName2}</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">CPF</th>
                            <td>{this.state.guestCPF2}</td>
                        </tr>
                        <tr class="table-primary">
                            <th scope="row">Event ID</th>
                            <td>{this.state.eventID2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}