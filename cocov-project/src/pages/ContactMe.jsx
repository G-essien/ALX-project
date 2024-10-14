import { useState } from "react";

export default function ContactMe() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "36c7ceac-f649-4537-9e9b-a536f76b6c1b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-3/4 my-10 p-3 mx-auto border border-green-500 flex flex-col justify-start items-center">


      <form className="w-full flex flex-col" onSubmit={onSubmit}>

        <label>Name <br />
        <input className="w-full border focus:outline-none border-gray-200" type="text" name="name" required/>  
        </label> <br />

        <label>Email <br />
        <input className="w-full border focus:outline-none border-gray-200" type="email" name="email" required/>   
        </label> <br />

        <label>Message <br />
        <textarea className="w-full h-20 border focus:outline-none border-gray-200" name="message" required></textarea> 
        </label> <br />  

        <button className="border border-gray-200 py-4 px-6 rounded-md justify-center hover:bg-gray-700 hover:text-white" type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}