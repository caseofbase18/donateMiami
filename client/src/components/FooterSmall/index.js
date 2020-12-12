import React from "react";
import { MDBContainer } from "mdbreact";
// import './style.css';

// bootstrap
const Footer = () => {
  return (

    <div className="footer-copyright text-center py-3" id="footersmall">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="#!"> donatemiami.com </a>
      </MDBContainer>
    </div>

  );
}

export default Footer;