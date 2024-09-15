import React from "react";
import "./contact.css";
function Contact() {
  return (
    <div id="contact" className="contact">
      <h1 className="content text-center  text-5xl font-bold ">Get in touch</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h2 className="content-start text-4xl font-bold">Let's talk</h2>
          <p className="text-xl">
            I'm currently available to take on new projects, so feel free to
            send me a massage about anything that you want me to work on. you
            can contact anytime.
          </p>
          <ul className="links flex  gap-4">
            <a href="https://facebook.com/">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://instagram.com/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </ul>
        </div>
        <div className="contact-right">
          <div className="bottom-r flex flex-col gap-5">
            <label>
              Your Name <br />
              <input
                className="bg-black rounded text-white p-2 border border-pink-300"
                type="text"
                placeholder=" Enter your name"
                style={{ height: "40px", width: "400px" }}
              />
            </label>
            <label>
              Your Email <br />
              <input
                className="bg-black rounded text-white p-2 border border-pink-300"
                type="text"
                placeholder=" Enter your email"
                style={{ height: "40px", width: "400px" }}
              />
            </label>

            <textarea
              style={{ width: "400px" }}
              className="messagebox bg-black p-2 text-white border border-pink-300"
              cols="100"
              rows="10"
              placeholder=" Enter your message"
            ></textarea>
            <button
              className="message-btn rounded-lg text-white"
              style={{ width: "120px", height: "50px" }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
