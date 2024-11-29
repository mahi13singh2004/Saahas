import React, { useState } from "react";

const Contact = () => {
 
  const [isSubmitted, setIsSubmitted] = useState(false);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitted(true);
  };


  const closePopup = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="max-w-[50%] mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Enquiry Form
      </div>
      <form className="py-4 px-6" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Enter any additional information"
          />
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Success Popup Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-1/3 text-center">
            <div className="mb-4 text-2xl font-semibold text-green-600">
              Form Submitted Successfully!
            </div>
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-700 font-bold text-xl hover:text-sky-400"
            >
              &times;
            </button>
            <div>
              <p className="text-gray-700">
                Thank you for submitting. We will get back to you shortly
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={closePopup}
                className="bg-gray-900 transform transition-all duration-300 ease-in-out hover:bg-gray-400 hover::text-red-400 hover:scale-105 hover:shadow-lg text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
