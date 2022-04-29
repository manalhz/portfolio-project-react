import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardText, CardTitle, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

function Calendar() {
  return (
    <div className="col-lg-9 col-sm-12 text-center embed-responsive embed-responsive-16by9">
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=MTAydXFuczlhbGFibnJncGw3aHFldmEyZ3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%237986CB"
        className="calendar embed-responsive-item" width="800" height="600" frameborder="0" scrolling="no" > </iframe>
    </div>
  );
}


class Rates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      firstname: ""
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleChange(event) {
    this.setState({
      firstname: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Thank you for booking, ${this.firstname.value}. Our team member will reach out to you within the next 24 to 48 hours. We appreciate your business.`);
    this.toggleModal();
  }

  render() {
    return (
      <div className="col-lg-3 col-sm-9 mt-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Rates
            </CardTitle>
          </CardHeader>
          <CardBody>
            <CardText className="mx-3 rates-page">
              <h5>Monday through Thursday</h5>
              <p>$169 per night</p>
              <h5>Friday through Sunday</h5>
              <p>$199 per night</p>
              <h5>Summer and Holidays</h5>
              <p>$219 per night</p>
            </CardText>
            <Button onClick={this.toggleModal} className="col-6 offset-3 btn-info">Book Now</Button>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}>Make a Reservation</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="firstname">First Name</Label>
                <Input onChange={this.handleChange} type="text" id="firstname" name="firstname" innerRef={input => this.firstname = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" name="lastname" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="numGuests">Number of Guests</Label>
                <Input min={1} type="number" id="numGuests" name="numGuests" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="arrivalDate">Date of Arrival</Label>
                <Input type="date" id="arrivalDate" name="arrivalDate" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="checkoutDate">Date of Check Out</Label>
                <Input type="date" id="checkoutDate" name="checkoutDate" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="telephone">Telephone</Label>
                <Input type="text" id="telephone" name="telephone" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" name="email" />
              </FormGroup>
              <FormGroup tag="fieldset">
                <Label>Payment</Label>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="creditCard" />{' '}
                    Credit Card
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="paypal" />{' '}
                    PayPal
                  </Label>
                </FormGroup>
              </FormGroup>
              <Button type="submit" value="submit" color="info">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

function Availability(props) {

  return (
    <div className="container">
      <h1 className="text-center">Availability and Rates</h1>
      <div className="row">
        <Calendar />
        <Rates />
      </div>
    </div>
  );
}

export default Availability; 