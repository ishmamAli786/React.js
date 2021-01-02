import React from 'react';
import './App.css';
import Navbar from './components/elements/Navbar';
import Contact from './components/contacts/Contact';
import Addcontact from './components/contacts/Addcontact';
import Editcontact from './components/contacts/Editcontact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
    <Navbar/>
    <div className="container">
    <div className="py-3">
    <Switch>
              <Route path="/" exact component={Contact}></Route>
              <Route path="/add" exact component={Addcontact}></Route>
              <Route path="/edit/:id" exact component={Editcontact}></Route>
    </Switch>
    </div>
    </div>
     </div>
      </Router>
  );
}

export default App;
