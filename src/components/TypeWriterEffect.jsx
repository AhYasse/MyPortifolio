import React from "react";
import Typewriter from "typewriter-effect";
const TypeWriterEffect = () => {
  return (
    <p className="text-center fs-3 fw-bold"><Typewriter options={{
        strings: ["A Frontend Developer.", "I love to create beautiful and functional web applications.", "Feel free to explore my work and get in touch!"],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
        }} />
        </p>
  );
};
export default TypeWriterEffect;
// This is a simple typewriter effect component for a React application.
// It uses the Typewriter-effect library to create a typing animation with multiple strings.
// The component includes buttons for navigation to projects and contact pages.
// To use this component, import it into your main App component or wherever you need a typewriter effect.  