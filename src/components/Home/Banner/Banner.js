import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";

const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div id="banner">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.9,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#f3cb96",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div
            class="col pt-4"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div class="card h-100 banner-card">
              <div class="card-body text-start">
                <h5 class="card-title banner-titile">Fall In Love</h5>
                <h1 class="card-text bannet-text">
                  Redefining The Meaning Of Time
                </h1>
                <Link className="banner-btn" to="/explore">
                  Explore
                </Link>
              </div>
            </div>
          </div>
          <div class="col banner-card">
            <div class="card h-100 banner-card">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block  image "
                    src="https://i.ibb.co/cwhtKVt/join4-removebg-preview.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block  image "
                    src="https://i.ibb.co/1mxy4Wx/join5-removebg-preview.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block  image "
                    src="https://i.ibb.co/fSHRZxN/join3-removebg-preview.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block  image w-100"
                    src="https://i.ibb.co/64xp8gm/removal-ai-tmp-61b990a68e768.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block  image w-100"
                    src="https://i.ibb.co/M5Rczyg/join2-removebg-preview.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
