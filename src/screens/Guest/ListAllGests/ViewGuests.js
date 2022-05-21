import React from "react";
import "./ViewGuests.css";
import { withRouter } from 'react-router-dom';
import axios from "axios";
import GuestsTable from "../../../componentes/GuestsTable";

class ViewGuests extends React.Component {
    state = {
        guests:[]
    }

    find = () => {
        axios.get('http://localhost:8080/api/guest/listAll',
        ).then( Response => {
            const guests = Response.data;
            this.setState({guests});
            console.log(guests);
        }).catch( error => {
            console.log(error.Response)
        });
    }

    delete = (guestCpf) => {
        axios.delete("http://localhost:8080/api/guest/delete",
            {
                data:{
                    cpf:guestCpf
                }
            }
        ).then( Response => {
            this.find();
        }).catch( error => {
            console.log(error.Response)
        });
    }

    edit = (guestCpf) => {
        this.props.history.push(`/updateGuest/${guestCpf}`);
    }

    render(){
        return(
            <div>
                <header className="App-header">
                    <fieldset>
                        <br/>
                        <button type="button" className="btn btn-primary btn-lg" onClick={this.find} >Find All Guests</button>
                        <br/>
                        <br/>
                        <GuestsTable guests={this.state.guests} delete={this.delete} edit={this.edit} />
                    </fieldset>
                </header>
            </div>
        )
    }
}

export default withRouter(ViewGuests);