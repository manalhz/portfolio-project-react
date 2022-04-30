import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardDeck, Nav, NavItem, NavLink } from 'reactstrap';
import { AMENITIES } from '../shared/amenities';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: AMENITIES
    };
  }

  renderNavPill() {
    return (
      <div>
        <Nav pills className='btn-light'>
          <NavItem>
            <NavLink className='text-info' href="#amenities">Amenities</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-info' href="#floorplan">Floor Plan</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='text-info' href="#map">Map</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }

  renderAmenities(amenities) {
    return (
      <div>
        <h2 id="amenities" className="text-center mt-4">Amenities</h2>
        <CardDeck>
          {amenities.map(amenity => {
            return (
              <Card key={amenity.id}>
                <CardImg top width="100%" src={amenity.image} alt={amenity.name} />
                <CardBody className="text-center">
                  <CardTitle>{amenity.name}</CardTitle>
                  <CardText>{amenity.description}</CardText>
                </CardBody>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    )
  }

  renderFloorPlan() {
    return (
      <div className="text-center mt-3">
        <h2 id="floorplan">Floor Plan</h2>
        <Card className="col-md-8 offset-md-2">
          <CardImg src="assets/condo-imgs/floorplan.PNG" />
        </Card>
      </div>
    );
  }

  renderMap() {
    return (
      <div className="text-center container mt-3 mb-5">
        <h2 id="map">Map</h2>
        <div className="row row-content">
          <div className="col col-lg-10 offset-lg-1">
            <div className="mapouter">
              <div className="embed-responsive embed-responsive-16by9 gmap_canvas"><iframe class="embed-responsive-item"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=Chapman%20Commons&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                  href="https://fmovies-online.net"></a>
                <a href="https://www.embedgooglemap.net">embedgooglemap.net</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderNavPill()}
        {this.renderAmenities(this.state.amenities)}
        {this.renderFloorPlan()}
        {this.renderMap()}
      </div>
    );
  }
}


export default Overview;