import Image from "next/image";
import React from "react";

const ContactForm = () => {
  return (
    <div className=" bg-[#EDEDED]  rounded-lg shadow-md flex font-plus-jakarta">
      <div className="w-1/2 flex flex-col justify-between bg-gradient-custom-secondary text-white rounded-l-lg">
        <div className="flex justify-center items-center">
          <div className="p-14 mb-5">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="text-textprimary-dark">
              Need an experienced and skilled hand with custom Taxi projects?
              Fill out the form to get a free consultation.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Image
          width={100}
          height={100}
            src="/contact-usrafiki-1@2x.png"
            alt="Contact Us"
            className="w-3/4 h-auto"
          />
        </div>
      </div>
      <div className="w-1/2 p-8">
        <form>
          <div className="mb-4 ">
            <label htmlFor="fullName" className="block  font-bold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block  font-bold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email here"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block  font-bold">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your phone here"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block  font-bold">
              Messages
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your messages in here..."
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
            type="submit"
            className="px-5 bg-secondary font-semibold text-white py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Send Message
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
