import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Overview from './components/OverviewComponent';
import Main from './components/MainComponent';
import { AMENITIES } from './shared/amenities';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <div className="App" >
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
