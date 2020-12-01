import React from 'react';

// materialize
function Footer() {
    return (
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                  {/* add favicon before h5 text */}
                <h5 className="white-text">Thank you!</h5>
                <p className="grey-text text-lighten-4">We hope that Donate Miami has helped you choose how you would like to support our local communities.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links: Check us out!</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Casey GitHub Link</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Lisa GitHub Link</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Jorge GitHub Link</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020, Donate Miami
            </div>
          </div>
        </footer>

    )
}

export default Footer;