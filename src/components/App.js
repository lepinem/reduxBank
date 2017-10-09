import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import 'shoelace-css/dist/shoelace.css';
import '../styles/App.css';

// import *SomeComponent* from './components/*Some_Component*'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className= "jumbotron">
            <h1 className= "display-3">BankShot</h1>
            <p className= "lead">Your world wide banking leader.</p>
            <hr className= "my-4"/>
            <p>Quick, fast, and sometimes accurate account results.</p>
            <p className= "lead">
              <Link className= "btn btn-primary btn-lg" to="/users" role="button">Check Users</Link>
              </p>
            </div>
        </div>
        {/* <*SomeComponent /> */}
      </div>
    );
  }
}

export default App;
