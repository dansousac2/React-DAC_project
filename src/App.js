import React from 'react';
import './App.css';
import CreateGuest from './screens/Guest/Create/CreateGuest';
import UpdateGuest from './screens/Guest/Update/UpdateGuest';
import NavBar from './componentes/NavBar'

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
          <CreateGuest />
        </header>
      </div>
    );
  }
}
