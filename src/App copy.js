import React from 'react';
import './App.css';
import axios from 'axios';

export default class App extends React.Component {

  state = {
    eventName:"Sprint",
	  date:"12/12/2022",
	  adress:"Street Albert Einstein",
    resp:"none"
  }

  post = () => {
      axios.post("https://localhost:8080/api/event/save",this.state)
      .then((res) => console.log(res.data))
      .catch((res) => console.log(res.data))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <label>Evente Name: </label>
            <input type="text" value={this.state.eventName} onChange={(e) => {this.setState({eventName: e.target.value})}}/>
            <br />
            <label>Evente Date: </label>
            <input type="text" value={this.state.date} onChange={(e) => {this.setState({date: e.target.value})}}/>
            <br />
            <label>Adress: </label>
            <input type="text" value={this.state.adress} onChange={(e) => {this.setState({adress: e.target.value})}}/>
            <br/>
            <button onClick={this.post}>Create Event</button>
            <br/>
            <label>Status da requisição: {this.state.resp}</label>
        </header>
      </div>
    );
  }
}
