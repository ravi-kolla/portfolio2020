import React, {useState} from 'react';
import onClickOutside from "react-onclickoutside";
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

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  Header.handleClickOutside = () => setIsOpen(false);
  return(
    <Router>
    <nav className="container navbar navbar-expand-lg navbar-dark sticky-top mb-3">
      <div className="container">
        <a className="navbar-brand font-weight-normal text-light" href="/">Ravi Teja Kolla</a>
        <button onClick={toggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={isOpen ? 'true' : 'false'}  aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavAltMarkup">
          <div className="mr-auto navbar-nav"></div>
          <div className="navbar-nav">
            <a className="nav-link text-light" href="/">Home</a>
            <a className="nav-link text-light" href="/resume">Resume</a>
            <a className="nav-link text-light" href="/photos">Photography</a>
            <a className="nav-link text-light" href="/contact">Contact Me</a>
          </div>
        </div>
        </div>
    </nav>

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

const clickOutsideConfig = {
  handleClickOutside: () => Header.handleClickOutside
};

export default onClickOutside(Header, clickOutsideConfig);
