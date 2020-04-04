import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Author from './author';
import Resume from './resume';
import Gallery from './gallery';
import Contact from './contact';

function Header() {

  return(
    <Router>
    <div className="bg-white border-bottom shadow-sm mb-3 sticky-top">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3 px-md-4">
        <h5 className="my-0 mr-md-auto font-weight-normal">Ravi Teja Kolla</h5>
        <nav className="my-2 my-md-0 mr-md-3">
        <Link className="p-2 text-dark" to="/">Home</Link>
        <Link className="p-2 text-dark" to="/resume">Resume</Link>
        <Link className="p-2 text-dark" to="/photos">Photos</Link>
        <Link className="p-2 text-dark" to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
    <Switch>
        <Route exact path="/">
          <Author />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/photos">
          <Gallery />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  )
}

export default Header;
