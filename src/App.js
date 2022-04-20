import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Overview from './components/OverviewComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="/">OC Vacation Home</NavbarBrand>
        </div>
      </Navbar>
      <Overview />
    </div>
  );
}

export default App;
