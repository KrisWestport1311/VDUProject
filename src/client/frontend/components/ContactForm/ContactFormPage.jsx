import React, { useRef } from "react";
import { FaLocationArrow, FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import "./contactformpage.scss";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";

function ContactFormPage() {
  const form = useRef();

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    navigate("/thankyou");
    emailjs
      .sendForm(
        "service_616twph",
        "template_t3nr31l",
        form.current,
        "NcQbTa1uQGK9mx16Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Your message has been sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="cf_container">
      <div className="cf_content">
        <div className="cf_left">
          <div className="add details">
            <FaLocationArrow className="i" />
            <div className="topic">Address</div>
            <div className="text_one">Main Street</div>
            <div className="text_two">Westport, Co Mayo</div>
          </div>

          <div className="ph details">
            <FaPhoneAlt className="i" />
            <div className="topic">Phone</div>
            <div className="text_one">+353 98 284898</div>
          </div>

          <div className="email details">
            <FaMailBulk className="i" />
            <div className="topic">Email</div>
            <div className="text_one">info@focussafety.com</div>
          </div>
        </div>

        <div className="cf_right">
          <div className="topic_text">Send us a message</div>
          <p>
            If you would like to get in touch please feel free to fill out form
            below and get in touch
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="input_box">
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name here"
              />
            </div>

            <div className="input_box">
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email here"
              />
            </div>
            <p>Your message</p>
            <div className="input_message">
              <textarea name="message" />
            </div>

            <div className="input_button">
              <button type="submit">Send</button>
              <Link to="/" title="Return Home">
                <br />
                <BiHome className="userlist_icon" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactFormPage;
