export default function TuitionTypes() {
  const items = [
    {
      title: "Home Tutoring",
      subtitle: "Looking for one-to-one classes?",
      desc: "Its a unique opportunity to learn in the home with your expected future in different categories everything is in favor of your need",
      img: "https://i.postimg.cc/GmCtLzJt/Home_Tutoring.jpg",
    },
    {
      title: "Online Tutoring",
      subtitle: "Are you left with any doubts?",
      desc: "Connect with the best tutors from anywhere and take online classes by using different tools. Make your life easier with this process.",
      img: "https://i.postimg.cc/FH4zrGg7/Online_tuitoring.jpg",
    },
    {
      title: "Group Tutoring",
      subtitle: "Need the Competitive & Affordable experience?",
      desc: "A group of students can fulfill their hunger for learning with more affordable tuition fees. Get the opportunity of learning with knowledge sharing!",
      img: "https://i.postimg.cc/8zScpwBP/Group_tuitoring.jpg",
    },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#0b2b5c]">
          Tuition Types
        </h2>
        <p className="text-center text-slate-500 mt-2">
          Find the Best Tuition Type which suits you most
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl  duration-300 ease-in-out hover:scale-110 hover:-translate-y-2 transition p-6 text-center"
            >
              <img src={item.img} alt={item.title} className="h-48 mx-auto" />
              <h3 className="text-xl font-bold mt-6 text-slate-800">
                {item.title}
              </h3>
              <p className="text-sm text-indigo-500 mt-1">{item.subtitle}</p>
              <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
