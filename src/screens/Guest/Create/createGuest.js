import React from "react";
import './CreateGuest.css';
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class CreateGuest extends React.PureComponent {

    state = {
        guestName:"",
        guestCPF:"",
        eventID:""
    }
    
    
    
    post = () => {
        axios.post('http://localhost:8080/api/guest/save',
        {
            cpf:this.state.guestCPF,
            name:this.state.guestName,
            event:{
                id:this.state.eventID
            }
        }).then( Response => {
            console.log(Response)
        }).catch( error => [
            console.log(error.Response)
        ]);
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <fieldset>
                        <legend><h2>Create Guest</h2></legend>
                        <FormGroup label='Guest Name' htmlFor='lab01'>
                            <input className="form-control form-control-lg" type="text" placeholder="name" id="lab01"
                            onChange={(e) => {this.setState({guestName: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='CPF' htmlFor='lab02'>
                            <input className="form-control form-control-lg" type="text" placeholder="CPF" id="lab02"
                            onChange={(e) => {this.setState({guestCPF: e.target.value})}}/>
                        </FormGroup>
                        <FormGroup label='Event ID' htmlFor='lab03'>
                            <input className="form-control form-control-lg" type="text" placeholder="event id" id="lab03"
                            onChange={(e) => {this.setState({eventID: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.post} >Create</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}