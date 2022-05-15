import React from 'react';
import './App.css';
import CreateGuest from './screens/Guest/Create/CreateGuest';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CreateGuest />
        </header>
      </div>
    );
  }
}
