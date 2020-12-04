// import React from 'react';

// // bootstrap
// function Header() {
//     return (
//         <div className="jumbotron jumbotron-fluid">
//             <div className="container">
//                 {/* Logo goes here  */}
//                 {/* <h1 className="display-4">Fluid jumbotron</h1> */}
//             </div>
//         </div>
//     )
// }

// export default Header;

import React from 'react';
import logo from './donatemiamilogo.png'; // Tell webpack this JS file uses this image
import './style.css';

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} className= "logo" alt="Logo" />;
}

export default Header;