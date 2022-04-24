import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar light expand="md">
          <div className="container">
            <NavbarBrand href="/"><img src="/assets/OC-logo.png" height="90" width="90" alt="OC Vacation Home Logo" /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/overview">
                    Overview
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/gallery">
                    Gallery
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/availability">
                    Availability
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/things-to-do">
                    Things to Do
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/reviews">
                    Reviews
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;