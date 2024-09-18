import React, { useState } from "react";
import axios from "axios";
import "./moreinfo.css";

const MoreInfo = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    services: "",
    message: "",
  });

  const servicesList = [
    "Web Development",
    "App Development",
    "Graphic Design",
    "Marketing",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setUser({
        ...user,
        services: [...user.services, value],
      });
    } else {
      setUser({
        ...user,
        services: user.services.filter((service) => service !== value),
      });
    }
  };

  const getRequest = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const req = await axios({
        url: "https://new-portfolio-rzgi.vercel.app/api/user/send",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: user,
      });
      setUser({
        name: "",
        email: "",
        number: "",
        company: "",
        services: "",
        message: "",
      });
      console.log(req.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };
  return (
    <form
      className="moreinfo flex  justify-center items-center  "
      onSubmit={getRequest}
    >
      <div className="table flex flex-col  w-2/5 bg-white p-5 rounded-lg shadow-lg gap-5">
        <div>
          <p className="info-top text-5xl font-bold text-cente ">Contact us</p>
          <label>
            Full Name:
            <input
              className="block w-full p-2 mb-2  rounded outline outline-1 focus:ring focus:border-blue-500"
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email Address:
            <input
              className="block w-full p-2 mb-2  rounded outline outline-1 focus:ring focus:border-blue-500"
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Pnone Number
            <input
              className="block w-full p-2 mb-2  rounded outline outline-1 focus:ring focus:border-blue-500"
              type="text"
              name="number"
              value={user.number}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Company Name:
            <input
              className="block w-full p-2 mb-2  rounded outline outline-1 focus:ring focus:border-blue-500"
              type="text"
              name="company"
              value={user.company}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        <div>
          <h3 className="text-xl font-bold">Select Services:</h3>
          {servicesList.map((service) => (
            <div key={service}>
              <label>
                <input
                  type="checkbox"
                  value={service}
                  checked={user.services.includes(service)}
                  onChange={handleServiceChange}
                />
                {service}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-xl font-bold">
            Tell us something about your project
          </p>

          <textarea
            style={{ height: "200px" }}
            className="messagebox  p-2  border border-black"
            cols="50"
            rows="10"
            type="text"
            name="message"
            value={user.message}
            onChange={handleInputChange}
            required
            placeholder=" Enter your message"
          ></textarea>
        </div>
        <button className="btn-submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MoreInfo;
