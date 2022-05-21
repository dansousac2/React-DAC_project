import React from "react";
import './DeleteGuest.css'
import 'bootswatch/dist/vapor/bootstrap.css';
import FormGroup from "../../../componentes/FormGroup";
import axios from "axios";

export default class DeleteGuest extends React.Component {

    state = {
        guestCpf:0
    }

    delResquest = () => {
        axios.delete("http://localhost:8080/api/guest/delete",
            {
                data: {
                    cpf:this.state.guestCpf
                }
            }
        ).then( Response => {
            console.log(Response)
        }).catch( error => {
            console.log(error.Response)
        });
    }

    render() {
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <legend><h2>Delete Guest</h2></legend>
                        <FormGroup label='Guest CPF' htmlFor='lab00'>
                            <input className="form-control form-control-lg" type="text" placeholder="CPF" id="lab00"
                            onChange={(e) => {this.setState({guestCpf: e.target.value})}}/>
                        </FormGroup>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.delResquest} >Delete</button>
                    </fieldset>
                </header>
            </div>
        )
    }
}