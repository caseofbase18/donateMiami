import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style.css';
// bootstrap
const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4" className="footer" id="color">
      <MDBContainer fluid className="text-center text-md-left" className="color">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Thank you!</h5>
            <p>
              We hope that Donate Miami has helped you choose how you would like to support our local communities. &hearts;
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links: Check us out!</h5>
            <ul>
              <li className="list-unstyled">
                {/* thumbnail pic */}
                <img className="pic" src="https://avatars3.githubusercontent.com/u/66966245?s=460&u=38e65183f23e0f4f57620605f54815a9abecd387&v=4"></img><a href="https://github.com/caseofbase18" target="_blank">Casey's GitHub</a>
              </li>

              <li className="list-unstyled">
                {/* thumbnail pic */}
                <img className="pic" src="https://avatars0.githubusercontent.com/u/62854999?s=460&u=5438391f4f5c08fd2bb539712c486ac762a40e90&v=4"></img><a href="https://github.com/LisaMcGautier" target="_blank">Lisa's GitHub</a>
              </li>

              <li className="list-unstyled">
                {/* thumbnail pic */}
                <img className="pic" src="https://avatars0.githubusercontent.com/u/66213149?s=460&u=d9b22d03b6f739c3d92d28fd80b467a3176d8777&v=4"></img><a href="https://github.com/jrgsepulveda" target="_blank">Jorge's GitHub</a>
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