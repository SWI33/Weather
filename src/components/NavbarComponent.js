import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Button, Container } from "reactstrap";
import "../MyStyles.module.css";

const NavComponent = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router>
            <Navbar expand="lg" sticky="top">
              <Navbar.Brand style={{ color: "white" }} href="#">
                Forcast
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <div>
                    <Button
                      style={{ backgroundColor: "transparent", color: "white" }}
                      href="#"
                    >
                      Home
                    </Button>
                    <Button
                      style={{ backgroundColor: "transparent", color: "white" }}
                      href="#"
                    >
                      Radar
                    </Button>
                    <Button
                      style={{ backgroundColor: "transparent", color: "white" }}
                      href="#"
                    >
                      Review
                    </Button>
                  </div>
                </Nav>
                <Form inline>
                  <FormControl
                    style={{ backgroundColor: "transparent", color: "white" }}
                    type="text"
                    placeholder="Search"
                    placeholder="Search"
                    className="mr-sm-3"
                  />
                  <Button color="outline-light">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
            <div className="jumbtron text-center" style={{ color: "white" }}>
              <h1>Accurate-Weather</h1>
            </div>
             </Router>
        </div>
      </div>
    </div>
  );
};

export default NavComponent;
