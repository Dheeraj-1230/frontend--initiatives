import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Home from './components/home/home';
import Alumni from './components/alumni/Alumni';
import OurInitiatives from './components/initiatives/OurInitiatives';
import AboutUs from './components/Team/OurTeam';
import logo from './assets/nittsaclogo.jpeg';

function App() {
  return (
    <div className="App">
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Navbar className="navbar-container" expand="lg" sticky="top">
                <Navbar.Brand href="#home"><img className="nittsac-logo rounded-circle" src={logo} alt="Nittsac-Logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link className="nav-link nav-link-ltr" href="/">Home</Nav.Link>
                    <Nav.Link className="nav-link nav-link-ltr" href="/">Our Alumni</Nav.Link>
                    <Nav.Link className="nav-link nav-link-ltr" href="/OurInitiatives">Our Initiatives</Nav.Link>
                    <Nav.Link className="nav-link nav-link-ltr" href="/">About Us</Nav.Link>
                    {/* {<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>} */}
                  </Nav>
                  {/* {<Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>} */}
                </Navbar.Collapse>
              </Navbar>
              <br />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/alumini">
                  <Alumni />
                </Route>
                <Route path="/OurInitiatives">
                  <OurInitiatives />
                </Route>
                <Route path="/">
                  <AboutUs />
                </Route>
              </Switch>
              <br />
            </Router>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>The footer goes here.</p>
      </div>
    </div>
  );
}

export default App;
