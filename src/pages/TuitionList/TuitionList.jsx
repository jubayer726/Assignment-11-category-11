import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import avatarImg from "../../assets/images/cart.jpg";
import { Link } from "react-router";

const TuisionList = () => {
  //   const tuitions = [
  //   {
  //     id: 1,
  //     title: "Math Tuition for Class 8",
  //     subject: "Mathematics",
  //     level: "Class 8",
  //     price: "$20/hr",
  //     img: "https://i.ibb.co/5Wc6hK4/tutor1.png",
  //   },
  //   {
  //     id: 2,
  //     title: "English Grammar Tuition",
  //     subject: "English",
  //     level: "Class 6-10",
  //     price: "$18/hr",
  //     img: "https://i.ibb.co/V99RRfZ/tutor2.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Physics Advanced Tuition",
  //     subject: "Physics",
  //     level: "Class 9-12",
  //     price: "$25/hr",
  //     img: "https://i.ibb.co/rmShxmm/tutor3.png",
  //   },
  //   {
  //     id: 4,
  //     title: "Bangla Language Tuition",
  //     subject: "Bangla",
  //     level: "Primary-High School",
  //     price: "$15/hr",
  //     img: "https://i.ibb.co/k5bVRw0/tutor4.png",
  //   },
  // ];

  const { data: tuitions = [], isLoading } = useQuery({
    queryKey: ["tuitions"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/available-tuitions");
      return res.data;
    },
  });
  if (isLoading) <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tuition Listings
          </h2>
          <p className="text-gray-600 mt-2">
            Find the best tuition that matches your learning needs
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by subject or level..."
            className="w-full md:w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Filters */}
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
              All
            </button>
            <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
              Primary
            </button>
            <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
              High School
            </button>
            <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-100">
              College
            </button>
          </div>
        </div>

        {/* Tuition Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tuitions.map((item) => (
            <Link
              to={`/plant/1`}
              className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
            >
              <div>
                <img
                  src={item.image && item.image ? item.image : avatarImg}
                  alt=""
                  className="w-full h-40 object-cover rounded-lg"
                />

                <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-600 text-sm">
                  Subject: {item.subjects}- {item.studentClass}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-indigo-600">tk{item.salary}/month</p>
                  <button className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TuisionList;
