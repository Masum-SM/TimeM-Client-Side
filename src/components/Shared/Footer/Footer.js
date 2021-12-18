import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container bg-dark">
      <div className="container mx-auto row text-white py-4 text-start">
        <div className="col-lg-3 col-md-6 col-12">
          <img
            className="header-logo"
            src="https://i.ibb.co/2vL4tSR/logo0-removebg-preview.png"
            alt=""
          />
          Time<span>M</span>
          <h5 class="card-title banner-titile">Fall In Love</h5>
          <h3 class="card-text">Redefining The Meaning Of Time</h3>
        </div>
        <div className="col-lg-3 col-md-6 col-12 text-start">
          <h5 className="mb-4 footer-title">Open Hour</h5>
          <div className="d-flex justify-content-lg-start ftr-border footer-text">
            <p className="me-2">Monday-Friday :</p>
            <p>9am - 5pm.</p>
          </div>
          <div className="d-flex justify-content-lg-start ftr-border footer-text">
            <p className="me-2">Saturday :</p>
            <p>10am - 2pm.</p>
          </div>
          <div className="d-flex justify-content-lg-start ftr-border footer-text">
            <p className="me-2">Sunday :</p>
            <p>Closed.</p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-12 text-start">
          <h5 className="mb-4 footer-title">Contact Info</h5>
          <p className="footer-text link-text">
            <span>
              <i className="fas fa-map-marker-alt me-2"></i>
            </span>{" "}
            3481 Rabana Place, 2090
          </p>
          <p className="footer-text link-text">
            <span>
              <i className="fas fa-phone-alt me-2"></i>
            </span>{" "}
            +880 17980XXXXX
          </p>
          <p className="footer-text link-text">
            <span>
              <i className="fas fa-envelope me-2"></i>
            </span>{" "}
            info@shoeZone.com
          </p>
          <p className="footer-text link-text">
            <span>
              <i className="fas fa-fax me-2"></i>
            </span>{" "}
            Fax : 02 9635 0247
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-12 text-start">
          <h5 className="mb-4 footer-title">Quick Links</h5>
          <p>
            <Link
              className="text-decoration-none footer-text link-text"
              to="/home"
            >
              Home
            </Link>
          </p>
          <p>
            <Link
              className="text-decoration-none footer-text link-text"
              to="/contact"
            >
              Contact
            </Link>
          </p>
          {/* {
                        user.email
                        &&
                        <p><Link className="text-decoration-none footer-text link-text" to="/dashboard">Dashboard</Link></p>
                    } */}
          <p>
            <Link
              className="text-decoration-none footer-text link-text"
              to="/allProducts"
            >
              Explore Product
            </Link>
          </p>
        </div>
      </div>

      <div className="footer-bottom py-4">
        <div className="d-flex justify-content-between container align-items-center mx-auto">
          <p className="textbottom-color">
            Copyright &copy; 2021. All rights reserved TimeM
          </p>
          <div>
            <span>
              <i className="footer-icon fab fa-facebook-square"></i>
            </span>
            <span>
              <i className="footer-icon fab fa-whatsapp-square"></i>
            </span>
            <span>
              <i className="footer-icon fab fa-instagram-square"></i>
            </span>
            <span>
              <i className="footer-icon fab fa-youtube-square"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
