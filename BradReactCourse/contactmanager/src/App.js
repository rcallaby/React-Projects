import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import './App.css';

class App extends Component {
  render() {

   return <div classname="app">
          <Header branding="Contact Manager" />
          <Contacts name="John Doe" email="jdoe@gmail.com" phone="555-555-5555"/>
      </div>
  }
}

export default App;
