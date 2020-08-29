import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Button } from "reactstrap";
import "../MyStyles.module.css";

const NavComponent = () => {
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
                      href="#">
                      Home
                    </Button>
                  </div>
                </Nav>
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
