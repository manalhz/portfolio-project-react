import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import { PLACES } from '../shared/places';
import { ListGroup, ListGroupItem } from 'reactstrap';


function PlacesList() {
  return (
    <div className="align-self-center offset-md-2 col-md-8 mt-3">
      <h3 className="text-center">Places to Visit</h3>
      <ListGroup>
        <ListGroupItem>Disneyland, Disney California Adventure, Downtown Disney: 1.8 miles</ListGroupItem>
        <ListGroupItem>Great Wolf Lodge: 0.8 mile</ListGroupItem>
        <ListGroupItem>Anaheim Convention Center: 1.2 miles</ListGroupItem>
        <ListGroupItem>Anaheim GardenWalk: 1.7 miles</ListGroupItem>
        <ListGroupItem>The Outlets at Orange: 2 miles</ListGroupItem>
        <ListGroupItem>Discovery Cube Orange County: 3.8 miles</ListGroupItem>
        <ListGroupItem>Honda Center: 3.8 miles</ListGroupItem>
        <ListGroupItem>Muzeo: 3.8 miles</ListGroupItem>
        <ListGroupItem>Irvine Spectrum: 15 miles</ListGroupItem>
        <ListGroupItem>Newport Beach: 17 miles</ListGroupItem>
        <ListGroupItem>Huntington Beach: 15 miles</ListGroupItem>
        <ListGroupItem>Laguna Beach: 23 miles</ListGroupItem>
        <ListGroupItem>Los Angeles: 30 miles</ListGroupItem>
        <ListGroupItem>San Diego: 93 miles</ListGroupItem>
      </ListGroup>
    </div>
  );
}

function Restaurants() {
  return (
    <div className="align-self-center offset-md-2 col-md-8 mt-3">
      <h3 className="text-center">Restaurants</h3>
      <ListGroup>
        <ListGroupItem>Bruxie</ListGroupItem>
        <ListGroupItem>Roscoe's Chicken and Waffles</ListGroupItem>
        <ListGroupItem>Sabroso! Mexican Grill</ListGroupItem>
        <ListGroupItem>Pho Ha Plus</ListGroupItem>
        <ListGroupItem>The Vox Kitchen</ListGroupItem>
        <ListGroupItem>Nova Kitchen & Bar</ListGroupItem>
        <ListGroupItem>Craft By Smoke And Fire</ListGroupItem>
        <ListGroupItem>And so many more...</ListGroupItem>
      </ListGroup>
    </div>
  );
}

function Events() {
  return (
    <div className="align-self-center offset-md-2 col-md-8 mt-3">
      <h3 className="text-center">Upcoming Events</h3>
      <ListGroup>
        <ListGroupItem><a href="https://www.orangecounty.net/html/earthday.html">Earth Day Events and Activities</a>: Various Locations, April, May</ListGroupItem>
        <ListGroupItem><a href="https://www.lahabrachamber.com/citrus-fair-home/">Spring Citrus Fair</a>: La Habra, April 29 - May 1, 2022</ListGroupItem>
        <ListGroupItem><a href="https://bolsachica.org/">Bolsa Chica's Earth Day Festival</a>: Huntington Beach, April 30, 2022</ListGroupItem>
        <ListGroupItem><a href="https://adoptocpets.org/">South County Pet Expo</a>: Lake Forest, Saturday, April 30, 2022</ListGroupItem>
        <ListGroupItem><a href="https://www.cityoflapalma.org/553/Festival-of-Nations">Festival of Nations</a>: La Palma, Saturday, April 30, 2022</ListGroupItem>
        <ListGroupItem><a href="https://ocmarathon.com/">OC Marathon</a>: Newport Beach, April 30-May 1, 2022</ListGroupItem>
        <ListGroupItem><a href="https://ocfoodandwine.com/">Orange County Food & Wine Festival</a>: Tustin, Sunday, May 1, 2022</ListGroupItem>
        <ListGroupItem>Many more upcoming events can be found <a href="https://www.orangecounty.net/html/events.html">here</a></ListGroupItem>
      </ListGroup>
    </div>
  );
}


const fadeProperties = {
  duration: 3000,
  canSwipe: false,
};

class ThingsToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: PLACES,
    };
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Things to Do</h2>
        <div className="slide-container" style={{ height: "20%", width: "70%", margin: "0 auto" }}>
          <Slide {...fadeProperties} className="text-center">
            {this.state.places.map((item, id) => (
              <div className="each-fade" key={id}>
                <div>
                  <img src={item.image} />
                </div>
                <p className="text-center mt-2">
                  {item.description}
                </p>
              </div>
            ))};
          </Slide>
        </div>
        <PlacesList />
        <Restaurants />
        <Events />
      </div>
    );
  }
}

export default ThingsToDo;