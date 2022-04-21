import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Overview from './components/OverviewComponent';
import { AMENITIES } from './shared/amenities';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: AMENITIES
    };
  }

  render() {
    return (
      <div className="App" >
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="/">OC Vacation Home</NavbarBrand>
          </div>
        </Navbar>
        <Overview amenities={this.state.amenities} />
      </div>
    );
  }
}

export default App;
