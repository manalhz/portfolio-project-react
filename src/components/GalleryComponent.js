import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardDeck,
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';
import { Slide } from 'react-slideshow-image';
import { GALLERY } from '../shared/gallery';
import 'react-slideshow-image/dist/styles.css'


class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: GALLERY,
      isShowingSlideshow: false,
      selectedPhoto: 0
    };

    this.renderGallery = this.renderGallery.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isShowingSlideshow: false
    });
  }

  renderGallery(gallery) {
    const showSlideShow = (selectedPhoto) => {
      this.setState({
        isShowingSlideshow: true,
        selectedPhoto
      });
    };
    return (
      <div>
        <h2 className="text-center mt-4">Gallery</h2>
        <CardDeck>
          {gallery.map((item, index) => {
            return (
              <Card onClick={() => showSlideShow(index)} className="mt-3" style={{ minWidth: "300px" }} key={item.id}>
                <CardImg top width="100%" src={item.image} alt={item.name} />
                <CardBody className="text-center">
                  <CardText>{item.description}</CardText>
                </CardBody>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    );
  }

  render() {
    console.log(this.state.isShowingSlideshow);
    console.log(this.state.selectedPhoto);

    return (
      <div className="container">
        {this.renderGallery(this.state.gallery)};
        <div className="row">
          <Modal isOpen={this.state.isShowingSlideshow} toggle={this.toggle} className={this.props.showSlideShow}>
            <ModalHeader className="col-12" toggle={this.toggle}>
              <h3 className="offset-4">Gallery</h3>
            </ModalHeader>
            <ModalBody>
              <div className="slide-container">
                <Slide defaultIndex={this.state.selectedPhoto} autoplay={false}>
                  {this.state.gallery.map((item, id) => (
                    <div className="each-slide" key={id}>
                      <img style={{ maxHeight: "300px" }} src={item.image} />
                      <div className="text-center mt-2">
                        {item.description}
                      </div>
                    </div>
                  ))};
                </Slide>
              </div>
            </ModalBody>
          </Modal>
        </div >
      </div >
    );
  }
}
export default Gallery;