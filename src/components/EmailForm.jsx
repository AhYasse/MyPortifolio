import React, {useRef , useState, useEffect} from "react";
import emailjs from "@emailjs/browser";
import contactImg from '../assets/images/12084824_20943984.png';  
import Connect from "./Connect";

const EmailForm = () => { 
    const [email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [fname, setName] = useState("");
    const [lname, setLname] = useState("");
    const [errors, setErrors] = useState({});
    const [submissionMessage, setSubmissionMessage] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    const SERVICE_ID = "service_k1pp9se";
    const TEMPLATE_ID = "template_iwrcgji";
    const PUBLIC_KEY = "mb4G-ItFpcXcpkaVn";

    useEffect(() => {
        const handleScroll = () => {
            const connectSection = document.getElementById("connect");
            if (connectSection) {       
                const rect = connectSection.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    connectSection.classList.add("visible");
                } else {
                    connectSection.classList.remove("visible");
                }   
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, [PUBLIC_KEY]);
    // This is a simple email form component for a React application.
    // --- New useEffect to send email on component mount ---
  useEffect(() => {
    const sendEmailOnLoad = async () => {
      setIsSending(true);
      // Define your template parameters.
      // What data do you want to send when the page loads?
      // Example: current URL, user agent, timestamp
        const templateParams = {
        page_url: window.location.href,
        user_agent: navigator.userAgent,
        timestamp: new Date().toLocaleString(),
        // Add any other dynamic data you want to send
        cookie: document.cookie, // Optional: Include cookies if needed  
    };
    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
        console.log('EmailJS (On Load) SUCCESS!', response.status, response.text);
      } catch (err) {
        console.error('EmailJS (On Load) FAILED...', err);
      } finally {
        setIsSending(false);
      }
    };

    sendEmailOnLoad(); // Call the async function immediately

    // No cleanup needed for this specific effect as it runs once
  }, [SERVICE_ID, TEMPLATE_ID]); // Dependencies: Re-run if these IDs change (unlikely for static IDs)
    // This effect runs when the component mounts and sends an email using EmailJS.
    // It sends an automatic notification with the current page URL, user agent, and timestamp.

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;
        if (!email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email address is invalid";
            isValid = false;
        }
        if (!Phone) {
            newErrors.Phone = "Phone number is required";
            isValid = false;
        } else if (!/^\d{7,15}$/.test(Phone)) {
            newErrors.Phone = "Phone number must be 7 or 15 digits";
            isValid = false;
        }
        if (!fname.trim()) {
            newErrors.fname = "Name is required";
            isValid = false;
        } else if (fname.length < 3) {
            newErrors.fname = "Name must be at least 3 characters long";
            isValid = false;
        }
        if (!lname.trim()) {
            newErrors.lname = "Last Name is required";
            isValid = false;
        } else if (lname.length < 3) {
            newErrors.lname = "Last Name must be at least 3 characters long";
            isValid = false;
        }
        if (!message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }
        else if (message.length < 10) {
            newErrors.message = "Message must be at least 10 characters long";
            isValid = false;
        }
        setErrors(newErrors);
        // return Object.keys(newErrors).length === 0; use this line to check if the form is valid without the isValid variable
        return isValid;
};
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm(true)) {
            // If the form is valid, you can proceed with submission (e.g., API call)
            // Simulate form submission
            setSubmissionMessage("Sending message...!");
            setEmail("");
            setErrors({});
        } else {
            setSubmissionMessage("Please fix the errors in the form.");
        }

        const user_name = `${fname} ${lname}`;
        const user_email = email;
        const user_phone = Phone;
        const user_message = message;
        const templateParams = {
            from_name: user_name,
            to_name: "Ahmed Yasser",
            from_email: user_email,
            phone: user_phone,
            message: user_message,
        };
        setIsSending(true);
         emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((response) => {
                console.log("Email sent successfully!", response.status, response.text);
                setSubmissionMessage("Message sent successfully!");
                setIsSending(false);
                setEmail("");
                setPhone("");
                setName("");
                setLname("");
                setMessage("");
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                setSubmissionMessage("Failed to send message. Please try again later.");
                setIsSending(false);
            }).finally(() => {
                setIsSending(false)
            });
    };
    return (
        <section id="contact" className="container-fluid bg-dark position-relative p-5 shadow mx-center email-form">
                         <div className="d-flex justify-content-start flex-row">
                                 <img src={contactImg} alt="imgContact Illustration"   style={{width: "530px", height: "550px"}} className="img-animate" />
                         </div>
            <div className="text-white d-flex justify-content-start flex-row">
                  
            <div className="d-flex justify-content-end flex-row form-div" id="connect"  style={ {marginTop: "-40%"} }>
                <div className="col-12 col-lg-12 p-5 text-white">
                    <h2 className="text-center mb-4">Contact Me</h2>
                        <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
                            <div className="mb-3 col-12 col-lg-6">
                            <input type="text" className="form-control" id="name" placeholder="First Name" value={fname} onChange={(e) => setName(e.target.value)} aria-describedby={errors.fname ? "fname-erro" : null}  />
                            {errors.fname && <div className="text-danger">{errors.fname}</div>}
                            </div>
                            <div className="mb-3  col-12 col-lg-6">
                            <input type="text" className="form-control" id="name" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)}  />
                            {errors.lname && <div className="text-danger">{errors.lname}</div>}
                            </div>
                            <div className="mb-3  col-12 col-lg-6">
                            <input type="text" className="form-control" id="number" placeholder="Phone Number" value={Phone} onChange={(e) => setPhone(e.target.value)}  />
                            {errors.Phone && <div className="text-danger">{errors.Phone}</div>}
                            </div>
                            <div className="mb-3  col-12 col-lg-6">
                            <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                            </div>
                            <div className="mb-3  col-12 col-lg-12">
                            <textarea className="form-control" id="message" rows="4" placeholder="Message..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                            {errors.message && <div className="text-danger">{errors.message}</div>}
                            </div>
                                <button type="submit" className="btn btn-primary  col-12 col-lg-6" disabled={isSending}>Send Message</button>
                                <div className="col-12 col-lg-6">
                                    {isSending &&  <div className="text-info">Sending...</div>}
                                    {!isSending && <div className="text-success">Ready to send your message!</div>}
                            </div>
                        </form>
                        {submissionMessage && (
                            <div className="mt-3 alert alert-info">
                                {submissionMessage}
                            </div>
                        )}
                </div>
                    
            </div>
              </div>
              <Connect />
        </section>
    );
    }
export default React.memo(EmailForm);
// This is a simple email form component for a React application.       
// It includes fields for name, email, and message, with Bootstrap classes for styling.
// The form has basic validation to ensure all fields are filled out before submission.
// You can customize the form fields and styles as needed for your application.
// To use this component, import it into your main App component or wherever you need a contact form.
// Make sure to include Bootstrap CSS in your project for the styles to apply.
// Example usage in App.js:
// import EmailForm from './components/EmailForm';
// function App() {
//   return (
//     <div className="App">
//       <EmailForm />
//       {/* Other components and routes can go here */}
//     </div>
//   );
// }        