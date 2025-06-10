import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
  <nav className="navbar navbar-expand-lg navbar-dark top-0 w-100 fixed-top position-fixed header"> 
    <div className="container">
      <Link className="navbar-brand fs-1 fw-bold" to="/">Portifolio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto fw-bold">
          <li className="nav-item  ps-5">
            <a className="nav-link nav-link-h" href="#home">Home</a>
          </li>
          <li className="nav-item ps-5 fw-bold">
            <a className="nav-link nav-link-h" href="#skills">Skills</a>
          </li>
          <li className="nav-item ps-5 fw-bold">
            <a className="nav-link nav-link-h" href="#projects">Projects</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item p-1 fs-4 h-100 border border-white rounded-circle me-2 icon bg-black">
              <Link className="nav-link d-flex align-items-center justify-content-center" to="#facebook"><i className="fa-brands fa-discord" aria-hidden="ture"></i></Link> 
              </li> 
              
              <li className="nav-item p-1 fs-4 h-100  border border-white rounded-circle  me-2 icon  bg-black">
              <Link className="nav-link d-flex align-items-center justify-content-center" to="#linkedin"><i class="fa-brands fa-linkedin-in" aria-hidden="ture"></i></Link> 
              </li>
              <li className="nav-item p-1 fs-4 h-100  border border-white rounded-circle bg-dark  me-2 icon  bg-black">
              <a className="nav-link d-flex align-items-center justify-content-center" href="https://t.me/ahmed_yasser369" target="_blank"><i className="fa-brands fa-telegram" aria-hidden="ture"></i></a> 
              </li>
              <li className="nav-item p-1 fs-4 h-100 border border-white rounded-circle bg-dark  me-2 icon  bg-black">
                  <a className="nav-link d-flex align-items-center justify-content-center" href="https://github.com/AhYasse/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-github" aria-hidden="ture"></i>
                  </a>
              </li>
        </ul>
        <button className="btn btn-dark text-white  border border-white rounded-0 btn-contact">
            <a  className="text-white m-3 text-decoration-none fs-4 fw-bold" href="#connect">Contact Me</a>
        </button>
        
      </div>
    </div>
  </nav>        
  
  );
}
export default React.memo(Header);
// This is a simple header component for a React application.
// It includes a title and uses Bootstrap classes for styling.
// The header has a dark background and white text, with padding for spacing.
// You can customize the title and styles as needed for your application.
// To use this component, import it into your main App component or wherever you need a header.
// Make sure to include Bootstrap CSS in your project for the styles to apply.
// Example usage in App.js:
// import Header from './components/Header';
//  function App() {
//   return (
//     <div className="App">
//       <Header />
//       {/* Other components and routes can go here */}            
//     </div>
//   );
// }        