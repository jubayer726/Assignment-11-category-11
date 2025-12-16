/* eslint-disable react-hooks/immutability */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const StudentDashboard = () => {
  const { user } = useAuth();

  const { data: tuitions = [], refetch } = useQuery({
    queryKey: ["studentTuitions", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/student/tuitions/${user.email}`
      );
      return res.data;
    },
  });

  const { data: applications = [] } = useQuery({
    queryKey: ["applications"],
    // enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/applications`
      );
      return res.data;
    },
  });

  const handlePayment = async (t) => {
    const paymentInfo = {
      tutorId: t._id,
      name: t.tutorName,
      photo: t.tutorPhoto,
      subjects: t.subjects,
      email: t.tutorEmail,
      quantity: 1,
      price: t.price,
      student: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/create-checkout-session`,
      paymentInfo
    );
    window.location.href = data.url;
  };

  const handleReject = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this tuition?"
    );
    if (!confirm) return;

    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/applications/reject/${id}`);
      toast.success("Tuition has been Rejected!");
      refetch();
    } catch (error) {
      console.error(error);
      toast.error("Failed to Reject tuition");
    }
  };

  const { data: payments = [] } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/orders/student/${user.email}`
      );
      return res.data;
    },
  });

  return (
    <div>
      <div className="border border-gray-600 p-5 m-5">
        <h2 className="text-2xl font-bold mb-4 p-5">My Approved Tuitions</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Subject</th>
                <th>Salary</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tuitions.map((t, i) => (
                <tr key={t._id}>
                  <th>{i + 1}</th>
                  <td>{t.title}</td>
                  <td>{t.subjects}</td>
                  <td>{t.salary} tk/month</td>
                  <td><span className="badge badge-success">{t.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="border border-gray-600 p-5 m-5">
        <h2 className="text-2xl font-bold mb-4 p-5">Tutor Applycation</h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Tutor Photo</th>
                <th>Tutor Name</th>
                <th>Subject</th>
                <th>Salary (USD)</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((t) => (
                <tr key={t._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={t.tutorPhoto}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{t.tutorName}</td>
                  <td>{t.subjects}</td>
                  <td>{t.price}</td>
                  <td>{t.tutorEmail}</td>
                  <td><span className="badge badge-info">{t.status}</span></td>
                  <th>
                    <button
                      onClick={() => handlePayment(t)}
                      className="btn btn-success btn-sm mt-2 mx-2"
                    >
                      Accept & Pay
                    </button>

                    <button
                      onClick={() => handleReject(t._id)}
                      className="btn btn-error btn-sm mt-2 "
                    >
                      Reject
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment History */}

      <div className="border border-gray-600 p-5 m-5">
        <h2 className="text-2xl font-bold mb-4 p-5">Payment History</h2>

        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Date</th>
                <th>Transaction Id</th>
                <th>Tutor Id</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((p) => (
                <tr key={p._id}>
                  <td>{p.date}</td>
                  <td>{p.transactionId}</td>
                  <td>{p.tutorId}</td>
                  <td>{p.price} BDT</td>
                  <td>
                    <span className="badge badge-success">{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {payments.length === 0 && (
            <p className="text-center text-gray-500 mt-4">
              No payment history found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
