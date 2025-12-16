import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const TutorDashboard = () => {
  const { user } = useAuth();

  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["myApplications", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/applications?email=${user.email}`
      );
      return res.data;
    },
    enabled: !!user?.email,
  });

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Applied Tuitions</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Accepted Tuitions</h3>
          <p className="text-3xl text-green-600 font-bold mt-2">02</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Pending Applications</h3>
          <p className="text-3xl text-yellow-600 font-bold mt-2">01</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Monthly Earnings</h3>
          <p className="text-3xl text-indigo-600 font-bold mt-2">$220</p>
        </div>

      </div>

      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {applications.map((app) => (
            <div
              key={app._id}
              className="border rounded-lg p-4 shadow bg-white"
            >
              <h3 className="text-lg font-semibold">
                {app.tuitionTitle}
              </h3>

              <p>
                <strong>Student:</strong> {app.studentName}
              </p>

              <p>
                <strong>Expected Salary:</strong> {app.expectedSalary} BDT
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    app.status === "pending"
                      ? "text-yellow-500"
                      : app.status === "accepted"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {app.status}
                </span>
              </p>

              <p className="text-sm text-gray-500 mt-1">
                Applied on:{" "}
                {new Date(app.appliedAt).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TutorDashboard;
