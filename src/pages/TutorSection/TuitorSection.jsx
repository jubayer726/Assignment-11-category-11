import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { Link } from "react-router";

const TuisorSection = () => {
  const { data: tutors = [], isLoading } = useQuery({
    queryKey: ["tuitions"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/available-tutors`);
      return res.data;
    },
  });
  if (isLoading) <LoadingSpinner></LoadingSpinner>;


  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600">
            Meet Our <span className="text-[#167570]">Expert Tutors</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Highly qualified and experienced tutors ready to guide your learning
            journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tutors.map((tutor, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={tutor.photo}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              {/* Content */}
              <h3 className="text-xl font-bold mt-4 text-[#0b2b5c]">{tutor.name}</h3>

              <p className="text-gray-600 text-sm mt-1">
                Subject: <span className="font-medium">Subject: {tutor.subjects}</span>
              </p>

              <p className="text-gray-600 text-sm">Location: {tutor.address}</p>

              {/* Rating */}
              <p className="text-yellow-500 font-semibold mt-2">
                ⭐ {tutor.rating} / 5.0
              </p>

              {/* Button */}
              
                <Link to={`/tutor/${tutor._id}`} className="mt-4 w-full py-2 btn bg-gradient-to-r from-[#8e0e7b] to-[#5c0a5f]
         hover:from-[#a0148f] hover:to-[#6f0d72] transition-all duration-300 text-white rounded-lg">
                View Profile
              </Link>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TuisorSection;
