import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
import BisaApaAja from './pages/LatihanState'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/latihan-state'>
          <BisaApaAja/>
        </Route>
      </div>
    );
  }
}

export default App;
