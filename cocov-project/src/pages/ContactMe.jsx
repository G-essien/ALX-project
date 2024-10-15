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
    <div className="w-screen h-full flex flex-col mt-[100px] justify-start items-center px-3">

      <div className=" flex justify-start items-center w-full p-3 shadow-lg">
      <form className="w-full" onSubmit={onSubmit}>
        <label>Name <br />
        <input className="border border-gray-400 focus:outline-none w-full" type="text" name="name" required/>  
        </label> <br />

        <label>Email <br />
        <input className="border border-gray-400 focus:outline-none w-full" type="email" name="email" required/>   
        </label> <br />

        <label>Message <br />
        <textarea className="border border-gray-400 focus:outline-none w-full" name="message" required></textarea> 
        </label> <br />  

        <button className="border-gray-400 text-center border px-5 hover:text- py-2" type="submit">Submit Form</button>
        </form>
      </div>
      <span className="w-full p-2 text-center mt-1">{result}</span>
    </div>
  );
}