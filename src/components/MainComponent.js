import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Overview from './OverviewComponent';
import Gallery from './GalleryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          <Route exact path='/overview' render={() => <Overview />} />
          <Route exact path='/gallery' render={() => <Gallery />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;