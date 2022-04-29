import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";


function Home(props) {

  return (
    <div>
      <Card inverse>
        <CardImg
          id="newport-beach"
          alt="Newport Beach"
          src="assets/newport-beach.jpg"
          height="350"
        />
        <CardImgOverlay className="text-center">
          <CardTitle tag="h2">
            Welcome to OC
          </CardTitle>
          <Link to="/availability" className="btn btn-info justify-content-center" >Check Availability</Link>
        </CardImgOverlay>
      </Card>
      <Card color="info">
        <CardTitle className="home-page-title text-center" tag="h5">
          Enjoy the Califonia Sun
        </CardTitle>
        <CardText className="mx-3 home-page">
          <p>OC Vacation Home is located in Garden Grove, California. Enjoy great sunset
            views from your window and a view of
            Disneyland fireworks from the balcony. </p>
          <p>The space includes 2 bedrooms and 2 bathrooms. The property has luxury
            vinyl plank laminated wood flooring, complemented with soft blue wall colors and linen white ceiling and
            baseboards. The kitchen was upgraded to include a Farmhouse single basin sink, gleaming quartz countertops
            and
            stainless steel appliances. </p>
          <p>You will also be able to enjoy the community amenities of a clubhouse,
            fully-equipped
            fitness center, pool, spa, and barbecue areas.</p>
        </CardText>
      </Card>
    </div>
  );
}

export default Home; 