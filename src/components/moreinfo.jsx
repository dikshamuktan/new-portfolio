import "./moreinfo.css";

function MoreInfo() {
  const onSubmit = async (event) => {
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
    <div className="moreinfo flex  justify-center items-center gap-20 p-8">
      <form
        onSubmit={onSubmit}
        className="flex flex-col  w-2/5 bg-white p-5 rounded-lg shadow-lg gap-10"
      >
        <h1 className="info-top text-5xl font-bold text-center">
          Company Info
        </h1>
        <label>
          company Name
          <input
            className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
            type="text"
            name="name"
          />
        </label>

        <label>
          Address
          <input
            className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
            type="text"
            name="address"
          />
        </label>
        <label>
          Email
          <input
            className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
            type="text"
            name="email"
          />
        </label>
        <label>
          Phone Number
          <input
            className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
            type="text"
            name="phone number"
          />
        </label>
        <button type="submit" className="btn-submit">
          Submit now
        </button>
      </form>
    </div>
  );
}

export default MoreInfo;
