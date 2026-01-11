import { FaUserPlus, FaBriefcase, FaBell, FaMoneyBillWave } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "CREATE TUTOR PROFILE",
    desc: "Create your profile in minutes with sign up information",
    icon: <FaUserPlus />,
    reverse: false,
  },
  {
    id: 2,
    title: "APPLY FOR JOBS",
    desc: "Completing your profile start browsing our latest tuition jobs and start applying.",
    icon: <FaBriefcase />,
    reverse: true,
  },
  {
    id: 3,
    title: "GET FREE TUTORING JOB ALERT",
    desc: "Get updated tutoring job alerts via SMS/CALL whenever new jobs are posted.",
    icon: <FaBell />,
    reverse: false,
  },
  {
    id: 4,
    title: "START TUTORING AND GROW YOUR INCOME",
    desc: "If parent like the demo session, you can continue tuition and start earning.",
    icon: <FaMoneyBillWave />,
    reverse: true,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0b2b5c]">
            How it Works?
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Here's how it works for{" "}
            <span className="text-purple-600 font-semibold">Tutors</span>
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center gap-6
              ${step.reverse ? "md:flex-row-reverse" : ""}`}
            >
              {/* Step Number */}
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-pink-300
                text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.id}
                </div>
              </div>

              {/* Card */}
              <div className="flex w-full md:w-4/5 bg-white rounded-xl shadow-lg overflow-hidden
              hover:shadow-2xl transition-all duration-300">
                
                {/* Icon Box */}
                <div className="w-24 bg-purple-600 flex items-center justify-center text-white text-3xl">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-purple-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
