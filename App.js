import React from 'react';
import './App.css';
import Home from './Home.jsx';
import About from './About';
import Contact from './Contact';
import Service from './Services';
import {Switch,Route, Redirect} from 'react-router-dom';
import NavBar from './NavBar';
  const App = () => {
    return (
      <>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/service' component={Service}></Route>
        <Redirect to='/'></Redirect>
      </Switch>
      </>
    );
  
}

export default App;
