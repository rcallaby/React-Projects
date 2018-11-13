import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {

   return <div classname="app">
          <Header />
          <Contacts />
      </div>
  }
}

export default App;
