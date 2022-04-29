import React, { Component } from 'react';
import { Button, Card, CardBody, Form, FormGroup, Input, Label, Modal, ModalHeader, ModalBody } from 'reactstrap';

class SubmitReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      name: ""
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
      name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Thank you for your review, ${this.name.value}. We appreciate your stay.`);
    this.toggleModal();
  }

  render() {
    return (
      <>
        <Button onClick={this.toggleModal} className="btn-info mt-3">Submit Review</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
          <ModalHeader toggle={this.toggleModal}>Submit a Review</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Your Full Name</Label>
                <Input onChange={this.handleChange} type="text" id="name" name="name" innerRef={input => this.name = input} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="rating">Rating</Label>
                <Input type="select" name="rating" id="rating">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Comments</Label>
                <FormGroup>
                  <Input type="textarea" name="review" />{' '}
                </FormGroup>
                <Button onClick={this.handleSubmit} type="submit" value="submit" color="info" className="mt-2">Submit</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

function Reviews(props) {
  return (
    <div className="text-center">
      <h1>Reviews</h1>
      <Card>
        <CardBody>
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone</footer>
          </blockquote>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone</footer>
          </blockquote>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <blockquote className="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer className="blockquote-footer">Someone</footer>
          </blockquote>
        </CardBody>
      </Card>
      <SubmitReview />
    </div>
  );
};

export default Reviews;