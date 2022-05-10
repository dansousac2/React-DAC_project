import React from 'react';
import './App.css';
import axios from 'axios';
import { wait } from '@testing-library/user-event/dist/utils';

export default class App extends React.Component {

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
      <div className="App">
        <header className="App-header">
            <label>Guest Name: </label>
            <input type="text" value={this.state.guestName} onChange={(e) => {this.setState({guestName: e.target.value})}}/>
            <br />
            <label>Guest CPF: </label>
            <input type="text" value={this.state.guestCPF} onChange={(e) => {this.setState({guestCPF: e.target.value})}}/>
            <br />
            <label>Event Id: </label>
            <input type="text" value={this.state.eventID} onChange={(e) => {this.setState({eventID: e.target.value})}}/>
            <br/>
            <button onClick={this.post}>Create Guest</button>
            <br/>
            <label>Confirmed/</label>
            <br/>
            <label>Guest Name: {this.state.guestName2}</label>
            <br/>
            <label>Guest CPF: {this.state.guestCPF2}</label>
            <br/>
            <label>Event ID: {this.state.eventID2}</label>
        </header>
      </div>
    );
  }
}
