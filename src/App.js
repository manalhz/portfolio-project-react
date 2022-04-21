import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
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
        <Header />
        <Overview amenities={this.state.amenities} />
        <Footer />
      </div>
    );
  }
}

export default App;
