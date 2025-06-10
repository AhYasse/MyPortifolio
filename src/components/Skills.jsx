import React from "react";
import Carousel from "react-multi-carousel";
import "../assets/carousel.css";
// Make sure to install the react-multi-carousel package using npm or yarn
import SkillProgressBar from "./skillProgressbar";
const skillsData = [
    { id: 1, name: "HTML5"},
    { id: 2, name: "CSS3", },
    { id: 3, name: "JavaScript"},
    { id: 4, name: "React"},
    { id: 5, name: "Node.js"},
    { id: 6, name: "Python"},
    { id: 7, name: "JQuery"},
    { id: 8, name: "Bootstrap"},
    // { id: 9, name: "Tailwind CSS"},
    { id: 10, name: "Git & GitHub"},
    { id: 11, name: "APIs"},
    { id: 12, name: "Redux"},
    // { id: 13, name: "TypeScript"},
    // { id: 14, name: "Next.js"},
    // { id: 15, name: "GraphQL"},
    // { id: 16, name: "MongoDB"},
    // { id: 17, name: "Express.js"},
    // { id: 18, name: "Sass"},
    // { id: 19, name: "Material-UI"},
    // { id: 20, name: "Figma"},
    // { id: 21, name: "Web Accessibility"},
    { id: 22, name: "Responsive Design"},
    // { id: 23, name: "SEO Basics"},
    // { id: 24, name: "Agile Methodologies"},
    // { id: 25, name: "Cross-Browser Compatibility"},
    // { id: 26, name: "Performance Optimization"},
    // { id: 27, name: "Testing & Debugging"},
    { id: 28, name: "Version Control (Git)"},
    // { id: 29, name: "UI/UX Principles"},
    // { id: 30, name: "Content Management Systems (CMS)"},
    // { id: 31, name: "Web Security Fundamentals"},
    // { id: 32, name: "Progressive Web Apps (PWAs)"},
    // { id: 33, name: "WebAssembly"},
    // { id: 34, name: "GraphQL APIs"},
    // { id: 35, name: "Serverless Architecture"},
    // { id: 36, name: "Cloud Services (AWS, Azure)"},
    // { id: 37, name: "DevOps Basics"},
    // { id: 38, name: "Containerization (Docker)"},
    // { id: 39, name: "CI/CD Pipelines"},
    // { id: 40, name: "WebSockets"},
    // { id: 41, name: "Progressive Enhancement"},
    // { id: 42, name: "Single Page Applications (SPAs)"},
    // { id: 43, name: "Static Site Generators (SSGs)"},
    { id: 44, name: "Content Delivery Networks (CDNs)"},
    // { id: 45, name: "WebAssembly (Wasm)"},
    // { id: 46, name: "Internationalization (i18n)"},
    // { id: 47, name: "Localization (l10n)"},
    // { id: 48, name: "Web Components"},
    // { id: 49, name: "Accessibility Testing Tools"},
    // { id: 50, name: "Code Review Practices"},
    // { id: 51, name: "Agile Project Management"},
    // { id: 52, name: "Scrum Methodology"},
    // { id: 53, name: "Kanban Methodology"},
    // { id: 54, name: "User Acceptance Testing (UAT)"},
    // { id: 55, name: "API Documentation (Swagger)"},
    // { id: 56, name: "Web Performance Auditing"},
    // { id: 57, name: "Progressive Web App Features"},
    // { id: 58, name: "Service Workers"},
    // { id: 59, name: "Web Push Notifications"},
    // { id: 60, name: "WebAssembly (Wasm) Basics"},
    // { id: 61, name: "WebRTC"},
    // { id: 62, name: "GraphQL Subscriptions"},
    // { id: 63, name: "Microservices Architecture"},
    // { id: 64, name: "Server-Side Rendering (SSR)"},
    // { id: 65, name: "Static Site Generation (SSG)"},
    { id: 66, name: "Headless CMS"},
    { id: 67, name: "Content Management Systems (CMS) Basics"},
    // { id: 68, name: "WebAssembly (Wasm) Advanced"},
    // { id: 69, name: "Web Components (LitElement)"},
    // { id: 70, name: "WebAssembly (Wasm) Use Cases"},
    // { id: 71, name: "WebAssembly (Wasm) Performance"},
    // { id: 72, name: "WebAssembly (Wasm) Security"},
    // { id: 73, name: "WebAssembly (Wasm) Tools"},
    // { id: 74, name: "WebAssembly (Wasm) Ecosystem"},
    // { id: 75, name: "WebAssembly (Wasm) Future Trends"},
    // { id: 76, name: "WebAssembly (Wasm) Community"},
    // { id: 77, name: "WebAssembly (Wasm) Resources"},
    // { id: 78, name: "WebAssembly (Wasm) Best Practices"},
    // { id: 79, name: "WebAssembly (Wasm) Debugging"},
    // { id: 80, name: "WebAssembly (Wasm) Deployment"},
    // { id: 81, name: "WebAssembly (Wasm) Integration"},
    // { id: 82, name: "WebAssembly (Wasm) Interoperability"},
    // { id: 83, name: "WebAssembly (Wasm) Libraries"},
    // { id: 84, name: "WebAssembly (Wasm) Frameworks"},
    // { id: 85, name: "WebAssembly (Wasm) Tools and Toolchains"},
    // { id: 86, name: "WebAssembly (Wasm) Standards"},
    // { id: 87, name: "WebAssembly (Wasm) Specifications"},
    // { id: 88, name: "WebAssembly (Wasm) Community Resources"},
    // { id: 89, name: "WebAssembly (Wasm) Tutorials"},
    // { id: 90, name: "WebAssembly (Wasm) Courses"},
    // { id: 91, name: "WebAssembly (Wasm) Books"},
    // { id: 92, name: "WebAssembly (Wasm) Blogs"},
    // { id: 93, name: "WebAssembly (Wasm) Podcasts"},
    // { id: 94, name: "WebAssembly (Wasm) Conferences"},
    // { id: 95, name: "WebAssembly (Wasm) Meetups"},
    // { id: 96, name: "WebAssembly (Wasm) Online Communities"},
    // { id: 97, name: "WebAssembly (Wasm) Social Media"},
    // { id: 98, name: "WebAssembly (Wasm) News"},
    // { id: 99, name: "WebAssembly (Wasm) Updates"},
    // { id: 100, name: "WebAssembly (Wasm) Future Prospects"},
    // { id: 101, name: "WebAssembly (Wasm) Industry Adoption"},
    // { id: 102, name: "WebAssembly (Wasm) Use Cases in Industry"},
    // { id: 103, name: "WebAssembly (Wasm) Case Studies"},
    // { id: 104, name: "WebAssembly (Wasm) Success Stories"},
    // { id: 105, name: "WebAssembly (Wasm) Challenges"},
    // { id: 106, name: "WebAssembly (Wasm) Limitations"},
    // { id: 107, name: "WebAssembly (Wasm) Future Directions"},
    // { id: 108, name: "WebAssembly (Wasm) Ecosystem Growth"},
    // { id: 109, name: "WebAssembly (Wasm) Community Contributions"},
    // { id: 110, name: "WebAssembly (Wasm) Open Source Projects"},
    // { id: 111, name: "WebAssembly (Wasm) Industry Standards"},
    // { id: 112, name: "WebAssembly (Wasm) Cross-Platform Development"},
    // { id: 113, name: "WebAssembly (Wasm) Performance Optimization"},
    // { id: 114, name: "WebAssembly (Wasm) Security Best Practices"},
    // { id: 115, name: "WebAssembly (Wasm) Future Innovations"},
    // { id: 116, name: "WebAssembly (Wasm) Community Engagement"},
    // { id: 117, name: "WebAssembly (Wasm) Learning Resources"},
    // { id: 118, name: "WebAssembly (Wasm) Career Opportunities"},
    // { id: 119, name: "WebAssembly (Wasm) Job Market Trends"},
    // { id: 120, name: "WebAssembly (Wasm) Industry Demand"},
    // { id: 122, name: "WebAssembly (Wasm) Industry Trends"},

];

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section id="skills">
            <div className="skill-section pt-5"> 
                <div className="skills-container container mt-5 bg-dark text-white p-5 rounded-5 shadow">
                    <h2 className="text-center mb-4 fs-1 fw-bold Section-title">Skills</h2>
                    <h5 className="text-center mb-4 fs-3">You Can See My Skills Here</h5>
                    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000} className="custom-carousel">
                        {skillsData.map(skill => (
                            <div key={skill.id} className="d-flex flex-column align-items-center justify-content-around p-5 rounded-3 shadow">
                                <SkillProgressBar skillName={skill.name} />
                                <h5>{skill.name}</h5>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}       
// This is a simple skills component for a React application.
// It uses a carousel to display a list of skills with images and names.        
// The skills data is hardcoded for demonstration purposes, but you can fetch it from an API or a database.
// The component uses the `react-multi-carousel` library for the carousel functionality.
// Make sure to install the library using `npm install react-multi-carousel`.
// You can customize the skills data and styles as needed for your application.
// To use this component, import it into your main App component or wherever you need a skills section.
// Example usage in App.js:
// import Skills from './components/Skills';
// function App() {
//   return (
//     <div className="App">
//       <Skills />
//       {/* Other components and routes can go here */}
//     </div>
//   );
// }



export default React.memo(Skills);