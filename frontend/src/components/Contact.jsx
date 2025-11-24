import React, { useState } from "react";
import "./contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      toast.success(res.message);
      event.target.reset();
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="relative bg-gray-700 flex justify-center py-16">
      <div className="container flex flex-col items-center justify-center px-6 gap-6">
        <h1 className="text-white text-5xl font-extrabold mb-4">Contact Me</h1>

        <form
          onSubmit={Submit}
          className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-xl"
        >
          <div className="flex flex-col gap-6 w-full">
            <label className="w-full">
              <span className="font-semibold text-gray-700">Your Name</span>
              <input
                className="mt-1 w-full bg-gray-700 text-white p-3 rounded-lg border"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </label>

            <label className="w-full">
              <span className="font-semibold text-gray-700">Your Email</span>
              <input
                className="mt-1 w-full bg-gray-700 text-white p-3 rounded-lg border"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </label>

            <label className="w-full">
              <span className="font-semibold text-gray-700">Message</span>
              <textarea
                className="mt-1 w-full bg-gray-700 text-white p-3 rounded-lg border"
                rows="6"
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </label>

            <button
              type="submit"
              className="mt-4 bg-gray-700 hover:bg-gray-800 transition-all duration-200 text-white font-semibold py-3 rounded-lg w-40 mx-auto shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Contact;
