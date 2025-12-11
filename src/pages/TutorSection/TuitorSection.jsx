import React from 'react';

const TuisorSection = () => {
    const tutors = [
    {
      id: 1,
      name: "Md. Rahim Uddin",
      subject: "Mathematics",
      experience: "4 Years Experience",
      rating: 4.9,
      img: "https://i.ibb.co/5Wc6hK4/tutor1.png",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      subject: "English",
      experience: "3 Years Experience",
      rating: 4.8,
      img: "https://i.ibb.co/V99RRfZ/tutor2.png",
    },
    {
      id: 3,
      name: "Abdul Karim",
      subject: "Physics",
      experience: "5 Years Experience",
      rating: 5.0,
      img: "https://i.ibb.co/rmShxmm/tutor3.png",
    },
    {
      id: 4,
      name: "Fatema Akter",
      subject: "Bangla",
      experience: "2 Years Experience",
      rating: 4.7,
      img: "https://i.ibb.co/k5bVRw0/tutor4.png",
    },
    {
      id: 5,
      name: "Sajid Hasan",
      subject: "Chemistry",
      experience: "6 Years Experience",
      rating: 4.9,
      img: "https://i.ibb.co/NtK8Pt8/tutor5.png",
    },
    {
      id: 6,
      name: "Afia Rahman",
      subject: "Biology",
      experience: "4 Years Experience",
      rating: 4.8,
      img: "https://i.ibb.co/5Mmg86J/tutor6.png",
    },
  ];
    return (
        <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet Our Expert Tutors
          </h2>
          <p className="text-gray-600 mt-2">
            Highly qualified and experienced tutors ready to guide your learning journey.
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
                src={tutor.img}
                alt={tutor.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              {/* Content */}
              <h3 className="text-xl font-bold mt-4">{tutor.name}</h3>

              <p className="text-gray-600 text-sm mt-1">
                Subject: <span className="font-medium">{tutor.subject}</span>
              </p>

              <p className="text-gray-600 text-sm">{tutor.experience}</p>

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
      </div>
    </div>
    );
};

export default TuisorSection;