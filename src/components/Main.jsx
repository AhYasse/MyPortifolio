import React from "react";
import TypeWriterEffect from "./TypeWriterEffect";
import contactVideo from "../assets/images/5_yzznct.mp4"
const Main = () => {    
    return (
       <main id="home">
            <section className="container-fluid pt-5 d-flex main">
            <div className="container mt-5  text-white p-5 rounded shadow w-50 ms-5" >
                <h2 className="text-center mb-4 border border-light fw-bold fs-1 bg-dark">Welcome All In My Portifolio</h2>
                <p className="text-center fs-1 fw-bold">Hi! I'm Ahmed Yasser,</p>
                <p className="text-center fs-2 fw-bold">ReactJS Developer, </p>
                <TypeWriterEffect />
                <div className="text-center mt-4">
                  <a className="text-white m-3 text-decoration-none fs-2" href="#connect">Contact Me <i class="fa fa-arrow-circle-down" aria-hidden="true"></i></a>  
                 </div>
            </div>
                <div>
                   
                    <video  src={contactVideo} preload="true" autoPlay muted loop  className="" style={{objectFit: "warp",}} width={"430px"} height={"650px"}>
                           <source media="(min-width: 400px )"  type="video/mp4"/>
                    </video>
                </div>
            </section>
       </main>
    );
}
export default React.memo(Main);
// This is a simple main component for a React application.     