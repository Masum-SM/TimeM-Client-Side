import React, { useState } from "react";
import { Accordion, Button, Modal } from "react-bootstrap";
import "./WatchHome.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import Rating from "react-rating";
const WatchHome = ({ watch }) => {
  const {
    _id,
    name,
    img1,
    img2,
    img3,
    des,
    productDetails1,
    productDetails2,
    rating,
    price,
  } = watch;
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    const settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Modal
        {...props}
        size="lg"
        contentClassName="mod"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4 className="modal-title">{name}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Slider {...settings}>
              <div>
                <h4 className="brand-div abot-slider">
                  <img className="modal-img" src={img1} alt="" srcset="" />
                </h4>
              </div>
              <div>
                <h4 className="brand-div abot-slider">
                  <img className="modal-img" src={img2} alt="" srcset="" />
                </h4>
              </div>
              <div>
                <h4 className="brand-div abot-slider">
                  <img className="modal-img" src={img3} alt="" srcset="" />
                </h4>
              </div>
            </Slider>
          </div>
          <Accordion className="accor-container">
            <Accordion.Item className="accro-con" eventKey="0">
              <Accordion.Header>
                <h4 className="mod-title">Descriptions</h4>
              </Accordion.Header>
              <Accordion.Body>{des}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="accro-con" eventKey="1">
              <Accordion.Header>
                <h4 className="mod-title">About</h4>
              </Accordion.Header>
              <Accordion.Body>
                <p>{productDetails1}</p>
                <p>{productDetails2}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="modal-fooder">
            <Link to={`/placeorder/${_id}`}>
              <button className="addcart-btn my-4">
                <i class="fas fa-cart-plus "></i> Add To Cart
              </button>
            </Link>

            {
              <div className="mb-4 bg-transparent">
                <small className="rating">Rating : </small>
                <Rating
                  initialRating={rating}
                  readonly
                  placeholderRating={4}
                  emptySymbol={<i className="far fa-star review-rating"></i>}
                  placeholderSymbol={
                    <i className="fas fa-star-half-alt  review-rating"></i>
                  }
                  fullSymbol={<i className="fas fa-star  review-rating"></i>}
                />
              </div>
            }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div className="col">
      <div className="card h-100 watch-card">
        <div className="overflow">
          <img className="img-style w-100" src={img1} alt="" />
        </div>
        <div className="card-text">
          <h3>Price : ${price}</h3>

          <h3>
            <>
              <Button className="modal-btn" onClick={() => setModalShow(true)}>
                <i class="fas fa-info card-info"></i>
              </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </>
          </h3>
          <h3>
            <Link to={`/placeorder/${_id}`}>
              <button className="mb-3 booking-btn ms-3">
                <i class="fas fa-cart-plus card-add"></i>
              </button>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default WatchHome;
