import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      firstname: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Thank you for contacting us. Our team member will reach out to you within the next 24 to 48 hours.`);
    this.toggleModal();
  }


  render() {
    return (
      <div>
        <h2 className="text-center">Contact Us</h2>
        <Form className="mx-4 my-4" onSubmit={this.handleSubmit} >
          <FormGroup className="offset-1" row>
            <Label sm={2} htmlFor="firstname">First Name</Label>
            <Col sm={8}>
              <Input onChange={this.handleChange} type="text" id="firstname" name="firstname" innerRef={input => this.firstname = input} />
            </Col>
          </FormGroup>
          <FormGroup row className="offset-1">
            <Label sm={2} htmlFor="lastname">Last Name</Label>
            <Col sm={8}>
              <Input type="text" id="lastname" name="lastname" />
            </Col>
          </FormGroup>
          <FormGroup row className="offset-1">
            <Label sm={2} htmlFor="telephone">Telephone</Label>
            <Col sm={8}>
              <Input type="text" id="telephone" name="telephone" />
            </Col>
          </FormGroup>
          <FormGroup row className="offset-1">
            <Label sm={2} htmlFor="email">Email</Label>
            <Col sm={8}>
              <Input type="email" id="email" name="email" />
            </Col>
          </FormGroup>
          <FormGroup row className="offset-1">
            <Label sm={2} htmlFor="numGuests">Number of Guests</Label>
            <Col sm={4}>
              <Input min={1} type="number" id="numGuests" name="numGuests" />
            </Col>
          </FormGroup>
          <FormGroup row className="offset-1">
            <Label sm={2} htmlFor="arrivalDate">Date of Arrival</Label>
            <Col sm={4}>
              <Input type="date" id="arrivalDate" name="arrivalDate" />
            </Col>
          </FormGroup>
          <FormGroup row className="offset-1">
            <Label sm={2}>Comments or Questions</Label>
            <Col sm={8}>
              <Input type="textarea" name="review" />{' '}
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={2} className="offset-5">
              <Button type="submit" value="submit" color="info">Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Contact;