import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import './style.css';

// bootstrap
const Footer = () => {
  return (
    // <MDBFooter color="blue" className="font-small pt-4 mt-4" className="footer" id="color">
    <div className="footer-copyright text-center py-3" id="footersmall">
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href="#!"> donatemiami.com </a>
      </MDBContainer>
    </div>
    // </MDBFooter>
  );
}

export default Footer;