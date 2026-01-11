import { useQuery } from "@tanstack/react-query";
import { FaMapMarkerAlt, FaHome, FaCalendarAlt, FaUser } from "react-icons/fa";
import { MdClass, MdSubject } from "react-icons/md";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { Link } from "react-router";
import { useState } from "react";
// import { MdClass } from "react-icons/md";

const TuisionList = () => {
  const [searchText, setSearchText] = useState("");
  const [filterClass, setFilterClass] = useState("All");

  const { data: tuitions = [], isLoading } = useQuery({
    queryKey: ["tuitions"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/available-tuitions`
      );
      return res.data;
    },
  });

  if (isLoading) return <LoadingSpinner />;

  //  Search + Filter Logic
  const filteredTuitions = tuitions.filter((item) => {
    const matchSearch =
      item.subjects.toLowerCase().includes(searchText.toLowerCase()) ||
      item.studentClass.toLowerCase().includes(searchText.toLowerCase());

    const matchFilter =
      filterClass === "All" || item.studentClass === filterClass;

    return matchSearch && matchFilter;
  });

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-600">
            Tuition <span className="text-[#167570]">Listings</span> 
          </h2>
          <p className="text-gray-600 mt-2">
            Find the best tuition that matches your learning needs
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          {/*  Search Bar */}
          <input
            type="text"
            placeholder="Search by subject or class..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          {/*  Filters */}
          <div className="flex gap-3 flex-wrap text-[#167570] font-semibold">
            {["All", "Class Five", "Class Eight", "Class Ten", "H.S.C"].map(
              (cls) => (
                <button
                  key={cls}
                  onClick={() => setFilterClass(cls)}
                  className={`px-4 py-2 rounded-lg border
                    ${
                      filterClass === cls
                        ? "bg-purple-600 text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                >
                  {cls}
                </button>
              )
            )}
          </div>
        </div>

        {/* Tuition Cards */}
        {filteredTuitions.length === 0 ? (
          <p className="text-center text-purple-600">No tuition found 😔</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTuitions.map((item) => (
              <Link key={item._id}
                to={`/tuition/${item._id}`}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
              >
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaMapMarkerAlt className="text-indigo-600" />
                    {item.location}
                  </p>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mt-3">
                  {item.title}
                </h2>

                {/* Tags */}
                <div className="flex gap-3 mt-4 flex-wrap">
                  <span className="flex items-center gap-2 bg-purple-600 text-white px-3 py-1 rounded-md text-sm">
                    <FaHome /> Home Tutoring
                  </span>
                  <span className="flex items-center gap-2 bg-teal-600 text-white px-3 py-1 rounded-md text-sm">
                    <FaCalendarAlt /> an hour ago
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mt-6 text-gray-700">
                  <div>
                    <p className="flex items-center gap-2 font-medium">
                      <MdClass /> Class:
                    </p>
                    <p className="text-gray-600">{item.studentClass}</p>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 font-medium">
                      <FaUser /> Preferred Tutor:
                    </p>
                    <p className="text-gray-600">preferredTutor</p>
                  </div>

                  <div>
                    <p className="flex items-center gap-2 font-medium">
                      <FaCalendarAlt /> Tutoring Days:
                    </p>
                    <p className="text-gray-600">
                      {item.daysPerWeek} Days/Week
                    </p>
                  </div>
                    <div>
                      <p className="flex items-center gap-2 font-medium">
                        <MdSubject /> Subject:
                      </p>
                      <div className="flex gap-2 flex-wrap mt-1">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">
                          {item.subjects}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="flex items-center gap-2 font-medium">
                        💰 Salary:
                      </p>
                      <p className="text-blue-600 font-bold text-lg">
                        {item.budget} $
                        <span className="text-sm text-gray-500">/Month</span>
                      </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-6">
                  <p className="text-gray-600"><span className="font-semibold">Posted at:</span> <span className="text-sm">{new Date(item.createdAt).toLocaleString("en-BD")}</span> </p>


                  {/* <Link
                        to={`/tuition/${_id}`}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition"
                      >
                        View Details
                      </Link> */}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TuisionList;
