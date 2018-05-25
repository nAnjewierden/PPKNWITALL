import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './reset.css'
import './App.css';
import routes from './Routes/Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="nav-bar">
          <Link to='/' className="nav-item"><h4>Medical Report</h4></Link>
          <Link to='/behavior' className="nav-item"><h4>Behavior Report</h4></Link>
          <Link to='/chart' className="nav-item"><h4>Data</h4></Link>
        </nav>
        <div className='routeDiv'>
        {routes}
        </div>
      </div>
    );
  }
}

export default App;
