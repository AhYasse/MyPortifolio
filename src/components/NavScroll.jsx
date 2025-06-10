import { useEffect } from 'react';

const NavScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar',);
      const backttotop = document.querySelector('.BackToTop');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        
      } else {
        navbar.classList.remove('scrolled');
      };
      if (window.scrollY > 300) {
        backttotop?.classList.add('show');    
      } else {
        backttotop?.classList.remove('show');
      }
    };
    window.addEventListener('scroll', handleScroll);


    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    
    };
  }, []);
  

  return null;
};

export default NavScroll;