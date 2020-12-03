import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// bootstrap
const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Thank you!</h5>
            <p>
            We hope that Donate Miami has helped you choose how you would like to support our local communities.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links: Check us out!</h5>
            <ul>
              <li className="list-unstyled">
                {/* thumbnail pic */}
                <a href="#!">Casey GitHub</a>
              </li>
              <li className="list-unstyled">
                {/* thumbnail pic */}
                <a href="#!">Lisa GitHub</a>
              </li>
              <li className="list-unstyled">
                {/* thumbnail pic */}
                <a href="#!">Jorge GitHub</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#!"> donatemiami.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;