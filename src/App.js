import React from 'react';
import './App.css';
import {Navbar, Nav} from 'react-bootstrap';
import Home from './Home';
import About from './About';
import {Link, Route, BrowserRouter as Router , Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar bg="primary" variant="dark" expand="lg">
          <div className="container">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto ">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
