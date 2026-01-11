import React from 'react';
import toast from 'react-hot-toast';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";



const Contact = () => {
  const handleSendMgs = () => {
    toast.success("Message sent successfully!");
  }

    return (
        <div>
            <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-6">
            Contact <span className="text-[#167570]">Us</span>
          </h2>

          <p className="text-gray-700 leading-7 mb-6">
            Have questions or need support? We're here to help students, tutors,
            and parents connect smoothly on eTuitionBd.
          </p>

          <div className="space-y-5 text-[#0b2b5c] text-lg">
            <div className="flex items-start space-x-3">
              <span className="text-2xl"><FaLocationDot /></span>
              <p>
                Mohakhali Dhaka-1200.<br />
                Dhaka Bangladesh
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-2xl"><IoCall /></span>
              <p>(+88) 01234567890</p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-2xl"><MdEmail /></span>
              <p>support@etuitionbd.com</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-md rounded-xl p-8">
          <h3 className="text-2xl text-center font-bold text-purple-600 mb-6">
            Send us <span className="text-[#167570]">Message</span>
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-800 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-800 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2
                focus:ring-blue-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              onClick={handleSendMgs}
              className="btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
            
        </div>
    );
};

export default Contact;