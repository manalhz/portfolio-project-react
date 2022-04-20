import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardDeck } from 'reactstrap';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amenities: [
        {
          id: 0,
          name: 'Fitness Center',
          image: 'assets/amenities-imgs/fitness-center-1.jpeg',
          description: 'Enjoy a workout in a fully-equipped fitness center, with a view of the pool.'
        },
        {
          id: 1,
          name: 'Pool and Spa',
          image: 'assets/amenities-imgs/pool-1.jpeg',
          description: 'Take a swim or relax in the jacuzzi.'
        },
        {
          id: 2,
          name: 'Courtyard',
          image: 'assets/amenities-imgs/courtyard-1.jpeg',
          description: 'Take a walk in the beautiful courtyard.'
        }
      ],
    };
  }

  renderAmenities(amenities) {
    return (
      <CardDeck>
        {amenities.map(amenity => {
          return (
            <Card key={amenity.id}>
              <CardImg top width="100%" src={amenity.image} alt={amenity.name} />
              <CardBody>
                <CardTitle>{amenity.name}</CardTitle>
                <CardText>{amenity.description}</CardText>
              </CardBody>
            </Card>
          );
        })}
      </CardDeck>
    )
  }

  renderFloorPlan() {
    return <h2>Floor Plan</h2>
  }

  renderMap() {
    return <h2>Map</h2>
  }

  render() {
    return (
      <div className="container">
        {this.renderAmenities(this.state.amenities)}
        {this.renderFloorPlan()}
        {this.renderMap()}
      </div>
    );
  }
}


export default Overview;