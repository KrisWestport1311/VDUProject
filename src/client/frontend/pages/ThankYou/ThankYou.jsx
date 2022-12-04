import React from 'react'
import './thankyou.scss'
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";

function ThankYou() {
  return (
    <div className="tf_container">
      <div className="tf_content">
        Thank you for your message, we will be in touch soon
        <Link to="/" title="Return Home">
          <br />
          <BiHome className="userlist_icon" />
        </Link>
      </div>
    </div>
  );
}

export default ThankYou