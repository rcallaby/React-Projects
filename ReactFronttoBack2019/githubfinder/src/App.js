import React, {Component} from 'react';
import './App.css';
import NavBar from './components/layout/NavBar.js';
import Users from './components/users/Users.js';

class App extends Component {
   render() {
     return(
    <div className="App">
      <NavBar></NavBar>
      <Users></Users>
    </div>
     )
   }
  ;
}

export default App;
