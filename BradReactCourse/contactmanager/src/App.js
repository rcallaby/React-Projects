import React, { Component } from 'react';
import Contacts from './components/Contacts';
import './App.css';

class App extends Component {
  render() {

   return <div classname="app">
       <h1>The Contact Manager App</h1>
          <Contacts />
      </div>
  }
}

export default App;
