import React from "react";
import './UpdateGuest.css';
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class UpdateGuest extends React.Component {

    state = {
        guestName:"",
        guestCPF:"",
        eventID:0,

        guestName2:"",
        guestCPF2:"",
        eventID2:""
    }
    
    
    
    post = () => {
        axios.post('http://localhost:8080/api/guest/update',
            {
                cpf:this.state.cpf,
                name:this.state.name,
                event:{
                    id:this.state.eventID
                }
            }
        ).then( Response => {
            console.log(Response)
            this.setState({guestName2:this.state.guestName, guestCPF2: this.state.guestCPF, eventID2: this.state.eventID})
        }).catch(error => {
            console.log(error.Response)
        });
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <fieldset>
                        <legend><h2>Update Guest</h2></legend>
                        <FormGroup label='CPF' htmlFor='lab02'>
                            <input className="form-control form-control-lg" type="text" placeholder="CPF" id="lab02"
                            onChange={(e) => {this.setState({guestCPF: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Guest Name' htmlFor='lab01'>
                            <input className="form-control form-control-lg" type="text" placeholder="name" id="lab01"
                            onChange={(e) => {this.setState({guestName: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Event ID' htmlFor='lab03'>
                            <input className="form-control form-control-lg" type="text" placeholder="event id" id="lab03"
                            onChange={(e) => {this.setState({eventID: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.post} >Update</button>
                    </fieldset>
                </header>
                <br/>
                <br/>
                <br/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Field</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="table-primary">
                            <th scope="row">CPF</th>
                            <td>{this.state.guestCPF2}</td>
                        </tr>
                        <tr className="table-primary">
                            <th scope="row">Name</th>
                            <td>{this.state.guestName2}</td>
                        </tr>
                        <tr className="table-primary">
                            <th scope="row">Event ID</th>
                            <td>{this.state.eventID2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}