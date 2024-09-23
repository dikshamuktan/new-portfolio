import React, { useState } from "react";
import "./contact.css";
function Contact() {
  const Submit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d2d75bd9-529e-4c0a-b669-4569baf31e24");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      // console.log("Success", res);
    }
  };
  return (
    <div className="contact sm:h-sereen">
      <h1 className="content text-center   font-bold ">Get in touch</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h2 className="content-start text-4xl font-bold">Let's talk</h2>
          <p className="text-xl">
            I'm currently available to take on new projects, so feel free to
            send me a massage about anything that you want me to work on. you
            can contact anytime.
          </p>
          <ul className="links flex  gap-4">
            <a href="https://www.facebook.com/moktanee.deeksha" target="blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/l.diksha/" target="blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/diksha-muktan-62a233317/"
              target="blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </ul>
        </div>
        <form onSubmit={Submit} className="contact-right ">
          <div className="bottom-r flex flex-col gap-5">
            <label>
              Your Name <br />
              <input
                className="bg-black rounded text-white p-2 border border-pink-300"
                type="text"
                name="name"
                placeholder=" Enter your name"
                // style={{ height: "40px", width: "400px" }}
              />
            </label>
            <label>
              Your Email <br />
              <input
                className="bg-black rounded text-white p-2 border border-pink-300"
                type="text"
                name="email"
                placeholder=" Enter your email"
                // style={{ height: "40px", width: "400px" }}
              />
            </label>

            <textarea
              // style={{ width: "400px" }}
              className="messagebox bg-black p-2 text-white border border-pink-300"
              cols="100"
              rows="10"
              name="message"
              placeholder=" Enter your message"
            ></textarea>
            <button
              type="submit"
              className="message-btn rounded-lg text-white"
              style={{ width: "120px", height: "50px" }}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
