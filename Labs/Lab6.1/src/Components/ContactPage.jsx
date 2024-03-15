import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../assets/ContactPage.scss";

const ContactPage = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_24myi9l",
        "template_saj2mli",
        form.current,
        "PmunvrIn-8TvgecZa"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Send Successful!");
          e.target.reset();
          setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h2>Contact with BaKa</h2>
      <form ref={form} onSubmit={sendEmail}>
        {message && <div className="message">{message}</div>}
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Country</label>
        <input type="text" name="user_country" />
        <label>State</label>
        <input type="text" name="user_state" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactPage;