import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2oohr2o",
        "template_qoqxble",
        form.current,
        "user_r7CjpvJ4TlNwjhHFca4tE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact">
      <h2 className="container mt-5 text-start section-title">Contact</h2>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div
            className="col"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="card h-100 from-img">
              <div className="card-body img-body">
                <img
                  src="https://i.ibb.co/1mkWz4r/contact-icon-png-0.png"
                  className="card-img-top w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div
            className="col"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="card h-100 form-container">
              <div className="card-body ">
                <h3 className="card-title send-mail">Send A Email</h3>
                <form
                  onSubmit={sendEmail}
                  ref={form}
                  className="contact-form mt-4"
                >
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                      name="number"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      name="message"
                    />
                  </div>
                  <div>
                    <input type="submit" value="Send Message" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
