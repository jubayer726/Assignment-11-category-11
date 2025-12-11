import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import { Link } from "react-router";


const TutorList = () => {

  const { data: tutors = [], isLoading } = useQuery({
    queryKey: ["tutors"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/tutors");
      return res.data;
    },
  });
  if (isLoading) <LoadingSpinner></LoadingSpinner>;
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Expert Tutors
          </h2>
          <p className="text-gray-600 mt-2">
            Highly qualified and experienced tutors ready to guide your learning
            journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div
              key={tutor.id}
              className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={tutor.photo}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              {/* Content */}
              <h3 className="text-xl font-bold mt-4">{tutor.name}</h3>

              <p className="text-gray-600 text-sm mt-1">
                Subject: <span className="font-medium">{tutor.subjects}</span>
              </p>

              <p className="text-gray-600 text-sm">{tutor.address}</p>

              {/* Rating */}
              <p className="text-yellow-500 font-semibold mt-2">
                ⭐ {tutor.rating} / 5.0
              </p>

              {/* Button */}
              <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                View Profile
              </button>
            </div>
          ))}
        </div>
        <div className='flex justify-center'>
        <Link to ='/tutors' className='btn p-5 m-10 bg-info text-white font-bold'>Show More</Link>
      </div>
      </div>
    </div>
  );
};

export default TutorList;
