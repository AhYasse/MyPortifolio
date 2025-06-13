import React from "react";
import { Link } from "react-router-dom";
// import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-white p-3 footer">
          <div className="container d-flex  justify-space-around justify-content-between align-items-center">
              <Link className="navbar-brand fs-1 fw-bold shadow p" to="/">Portifolio</Link>
                <ul className="d-flex">
                  <li className="nav-item p-2 fs-3 h-100 border border-white rounded-circle me-2 icon bg-black">
                               <a className="nav-link d-flex align-items-center justify-content-center" href="https://discord.com/users/1173595518174236774" target="_blank"><i className="fa-brands fa-discord" aria-hidden="ture"></i></a> 
                               </li>
                               <li className="nav-item p-2 fs-3 h-100  border border-white rounded-circle bg-dark  me-2 icon  bg-black">
                               <a className="nav-link d-flex align-items-center justify-content-center" href="https://t.me/ahmed_yasser369" target="_blank"><i className="fa-brands fa-telegram" aria-hidden="ture"></i></a> 
                               </li>
                               <li className="nav-item p-2 fs-3 h-100 border border-white rounded-circle bg-dark  me-2 icon  bg-black">
                                   <a className="nav-link d-flex align-items-center justify-content-center" href="https://github.com/AhYasse/" target="_blank" rel="noopener noreferrer">
                                       <i className="fa-brands fa-github" aria-hidden="ture"></i>
                                   </a>
                               </li>
                </ul>
            </div>
                    <ul className="navbar-nav m-auto fw-bold d-flex flex-row justify-content-center align-items-center">
                       <li className="nav-item  ps-4 fw-bold">
                          <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item ps-4 fw-bold">
                          <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item ps-4 fw-bold">
                          <a className="nav-link" href="#projects">Projects</a>
                        </li>
                    </ul>
      <div className="container text-center">
        <p>&copy;{new Date().getFullYear()} coded by <i class="fa fa-heartbeat text-danger" aria-hidden="true"></i>  Ahmed Yasser</p>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
// This is a simple footer component for a React application.       