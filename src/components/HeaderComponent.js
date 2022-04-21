import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="text-info">OC Vacation Home</h1>
              </div>
            </div>
          </div>
        </Jumbotron>
        <Navbar light sticky="top">
          <div className="container">
            <NavbarBrand href="/"></NavbarBrand>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;