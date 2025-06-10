import React, { useEffect } from "react";
import contactImg from '../assets/images/project1.png';
import contactImg2 from '../assets/images/project1-full.png';
import contactImg3 from '../assets/images/project2.png';
import contactImg4 from '../assets/images/project2-full.png';
import contactImg5 from '../assets/images/project3.png';
import contactImg6 from '../assets/images/project3-full.png';
import contactImg7 from '../assets/images/project4.png';
import contactImg8 from '../assets/images/project5.png';
import contactImg9 from '../assets/images/project5-full.png';
const Projects = () => {
  useEffect(() => {
    // Add the external CSS link
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fashion-slider.uiinitiative.com/assets/index.fca86069.css";
    document.head.appendChild(link);

    // Add the module preload link
    const preloadLink = document.createElement("link");
    preloadLink.rel = "modulepreload";
    preloadLink.href =
      "https://fashion-slider.uiinitiative.com/assets/vendor.688a9bfa.js";
    document.head.appendChild(preloadLink);

    // Add the external script
    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src =
      " https://fashion-slider.uiinitiative.com/assets/index.ff8f4572.js";
    document.body.appendChild(script);

    // Cleanup script and links on unmount
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preloadLink);
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      {/* Add the Swiper CSS */}
    
      <div className="fashion-slider" style={{height: "100vh", overflow: "hidden", backgroundColor: "#000"}} id="projects">
        <div className="swiper h-screen">
          <div className="swiper-wrapper h-screen">
            <div
              className="swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active"
              data-slide-bg-color="#000"
            >
              {/* slide title wrap */}
              <div
                className="fashion-slider-title h-screen flex flex-col justify-center items-center"
                data-swiper-parallax="-130%"
              >
                <a href={contactImg2} className="text-decoration-none" target="_blank"> <div className="fashion-slider-title-text   ">Project1</div></a>
              </div>
              <div className="fashion-slider-scale ">
                {/* slide image */}
                <img
                  src={contactImg}
                  alt="Project1"
                />

              </div>
            </div>

            <div
              className="swiper-slide swiper-slide-next"
              data-slide-bg-color="#000"
            >
              {/* slide title wrap */}
              <div
                className="fashion-slider-title h-screen flex flex-col justify-center items-center"
                data-swiper-parallax="-130%"
              >
                {/* slide title text */}
                <a href={contactImg4} className="text-decoration-none" target="_blank"><div className="fashion-slider-title-text">Project2</div></a>
              </div>
              {/* slide image wrap */}
              <div className="fashion-slider-scale">
                {/* slide image */}
                <img
                  src={contactImg3}
                  alt="Project2"
                />
              </div>
            </div>
                  <div
                    className="swiper-slide swiper-slide-next"
                    data-slide-bg-color="#000"
                  >
                    {/* slide title wrap */}
                    <div
                      className="fashion-slider-title h-screen flex flex-col justify-center items-center"
                      data-swiper-parallax="-130%"
                    >
                      {/* slide title text */}
                      <a href={contactImg6} className="text-decoration-none" target="_blank"><div className="fashion-slider-title-text">Project3</div></a>
                    </div>
                    {/* slide image wrap */}
                    <div className="fashion-slider-scale">
                      {/* slide image */}
                      <img
                        src={contactImg5}
                        alt="Project3"
                      />
                    </div>
                  </div>
                      <div
                  className="swiper-slide swiper-slide-next"
                  data-slide-bg-color="#000"
                >
                  {/* slide title wrap */}
                  <div
                    className="fashion-slider-title h-screen flex flex-col justify-center items-center"
                    data-swiper-parallax="-130%"
                  >
                    {/* slide title text */}
                    <div className="fashion-slider-title-text">Project4</div>
                  </div>
                  {/* slide image wrap */}
                  <div className="fashion-slider-scale">
                    {/* slide image */}
                    <img
                      src={contactImg7}
                      alt="Project4"
                    />
                  </div>
                </div>
            <div className="swiper-slide" data-slide-bg-color="#000">
              <div
                className="fashion-slider-title h-screen flex flex-col justify-center items-center"
                data-swiper-parallax="-130%"
              >
                 <a href={contactImg9} className="text-decoration-none" target="_blank"><div className="fashion-slider-title-text">Portifolio</div></a>
              </div>
              <div className="fashion-slider-scale">
                <img
                  src={contactImg8}
                  alt="Project5"
                />
              </div>
            </div>
          </div>
              
          <div className="fashion-slider-button-prev fashion-slider-button fashion-slider-button-disabled">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
              <g className="fashion-slider-svg-wrap">
                <g className="fashion-slider-svg-circle-wrap">
                  <circle cx="42" cy="42" r="40"></circle>
                </g>
                <path
                  className="fashion-slider-svg-arrow"
                  d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                  
                />
                <path className="fashion-slider-svg-line" d="M80,0H0" />
              </g>
            </svg>
          </div>
            
          <div className="fashion-slider-button-next fashion-slider-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
              <g className="fashion-slider-svg-wrap">
                <g className="fashion-slider-svg-circle-wrap">
                  <circle cx="42" cy="42" r="40"></circle>
                </g>
                <path
                  className="fashion-slider-svg-arrow"
                  d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
                />
                <path className="fashion-slider-svg-line" d="M80,0H0" />
              </g>
            </svg>
          </div>
          
        </div>
      </div>
    </>
  );
}
   
export default React.memo(Projects);
