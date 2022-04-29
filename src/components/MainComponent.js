import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import Overview from './OverviewComponent';
import Gallery from './GalleryComponent';
import Availability from './AvailabilityComponent';
import ThingsToDo from './ThingsToDoComponent';
import Reviews from './ReviewsComponent'
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
          <Route exact path='/availability' component={Availability} />
          <Route exact path='/things-to-do' render={() => <ThingsToDo />} />
          <Route exact path='/reviews' render={() => <Reviews />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;