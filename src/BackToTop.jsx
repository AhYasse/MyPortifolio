import React from 'react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="BackToTop" onClick={scrollToTop}>
        <a className="text-light m-3 text-decoration-none fs-2" href="#home"><i className="fa fa-arrow-circle-up " aria-hidden="true"></i></a>       
    </div>
  );
};
export default BackToTop;