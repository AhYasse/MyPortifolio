import React , {useEffect} from "react";
import emailjs from "@emailjs/browser";
const Connect = () => { 
    const [email, setEmail] = React.useState("");
    const [errors, setErrors] = React.useState({});
    const [submissionMessage, setSubmissionMessage] = React.useState("");
    const [isSending, setIsSending] = React.useState(false);    

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
    }
    , []);  
    useEffect(() => {
        emailjs.init(PUBLIC_KEY);
    }, [PUBLIC_KEY]);       
    // This is a simple connect component for a React application.
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
        setErrors(newErrors);
        return isValid;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSending(true);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSubmissionMessage("Email sent successfully!");
                setEmail("");
            }, (error) => {
                console.log(error.text);
                setSubmissionMessage("Failed to send email. Please try again later.");
            })
            .finally(() => {
                setIsSending(false);
            });
    }
    return (
        <section className="connect d-flex flex-row align-items-center justify-content-center" id="connect">
            <div className="fw-bold text-center text-white rounded shadow mb-3">
                Subscribe to my newsletter
            </div>
            <form onSubmit={handleSubmit} className="container d-flex flex-row align-items-center justify-content-center">
                <input 
                    type="email" 
                    name="user_email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter Your Email"  
                    className="shadow w-100 rounded border-0 mb-2"
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
                <button type="submit" className="btn btn-primary" disabled={isSending}>
                    {isSending ? "Sending..." : "Subscribe"}
                </button>
                {submissionMessage && <div className="mt-3 text-success">{submissionMessage}</div>}
            </form>
        </section>
    );
    // This is a simple connect component for a React application.
}
export default React.memo(Connect);
// This is a simple connect component for a React application.