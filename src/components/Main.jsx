import React from "react";
import TypeWriterEffect from "./TypeWriterEffect";
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
                    <video  src="https://v.etsystatic.com/video/upload/s--q0GjfJpQ--/ac_none,c_crop,du_15,h_720,q_auto:good,w_720,x_282,y_0/5_yzznct.mp4" preload="true" autoPlay loop  className="" style={{objectFit: "warp",}} width={"430px"} height={"650px"}>
                            <source media="(min-width: 400px )" srcset="./src/assets/images/5_yzznct.mp4" />
                    </video>
                </div>
            </section>
       </main>
    );
}
export default React.memo(Main);
// This is a simple main component for a React application.     