import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import Adduser from './components/users/Adduser';
import EditUser from './components/users/EditUser';
import User from './components/users/user';

function App() {
  return (
    <div>
    <Router>
        <Navbar />
        <Switch>
      <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
          <Route path="/users/add" exact component={Adduser}/>
          <Route path="/users/edit/:id" exact component={EditUser}/>
          <Route path="/users/:id" exact component={User}/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
