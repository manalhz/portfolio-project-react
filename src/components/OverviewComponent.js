import React, { Component } from 'react';

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

  render() {
    const amenities = this.state.amenities.map(amenity => {
      return (
        <div className="col">
          <img src={amenity.image} alt={amenity.name} />
          <h2>{amenity.name}</h2>
          <p>{amenity.description}</p>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {amenities}
        </div>
      </div>
    );
  }
}


export default Overview;