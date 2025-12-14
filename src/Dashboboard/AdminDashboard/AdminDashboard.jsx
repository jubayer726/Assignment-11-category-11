// const AdminDashboard = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">

//       <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

//       {/* Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-bold text-xl">Total Students</h3>
//           <p className="text-3xl font-bold text-indigo-600 mt-3">120</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-bold text-xl">Total Tutors</h3>
//           <p className="text-3xl font-bold text-green-600 mt-3">45</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-bold text-xl">Active Tuitions</h3>
//           <p className="text-3xl font-bold text-yellow-600 mt-3">30</p>
//         </div>

//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-bold text-xl">Total Earnings</h3>
//           <p className="text-3xl font-bold text-purple-600 mt-3">$3,200</p>
//         </div>

//       </div>

//       {/* Tutor Applications */}
//       <div className="bg-white p-6 rounded-xl shadow mb-10">
//         <h3 className="text-xl font-bold mb-4">Pending Tutor Applications</h3>

//         <ul className="space-y-4">
//           <li className="flex justify-between bg-gray-50 p-4 rounded-lg">
//             <span>Nusrat Jahan (English Tutor)</span>
//             <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Approve</button>
//           </li>
//           <li className="flex justify-between bg-gray-50 p-4 rounded-lg">
//             <span>Sajid Hasan (Chemistry Tutor)</span>
//             <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Approve</button>
//           </li>
//         </ul>
//       </div>

//       {/* Manage Users */}
//       <div className="bg-white p-6 rounded-xl shadow">
//         <h3 className="text-xl font-bold mb-4">Manage Users</h3>

//         <table className="w-full">
//           <thead>
//             <tr className="border-b">
//               <th className="p-3">Name</th>
//               <th className="p-3">Role</th>
//               <th className="p-3">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr className="border-b">
//               <td className="p-3">Rahim Uddin</td>
//               <td className="p-3">Student</td>
//               <td className="p-3">
//                 <button className="text-red-600">Remove</button>
//               </td>
//             </tr>
//             <tr>
//               <td className="p-3">Nusrat Jahan</td>
//               <td className="p-3">Tutor</td>
//               <td className="p-3">
//                 <button className="text-red-600">Remove</button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// };

// export default AdminDashboard;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const AdminDashboard = () => {
  const { data: tuitions = [], refetch } = useQuery({
    queryKey: ["pendingTuitions"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tuitions/pending`
      );
      return res.data;
    },
  });

  const handleApprove = async (id) => {
    await axios.put(`${import.meta.env.VITE_API_URL}/tuitions/approve/${id}`);
    refetch();
    toast.success("Tuition Approved!");
  };

  const handleDelete = async (id) => {
  const confirm = window.confirm("Are you sure you want to delete this tuition?");
  if (!confirm) return;

  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/tuitions/${id}`);
    toast.success("Tuition Deleted Successfully!");
    refetch();
  } catch (error) {
    console.error(error);
    toast.error("Failed to delete tuition");
  }
};

  return (
    <div className="mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Pending Tuition Requests</h2>
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
                <th>Student Name</th>
                <th>Student Class</th>
                <th>Address</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tuitions.map((t) => (
              <tr>
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
                          src={t.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                    </div>
                  </div>
                </td>
                <td>{t.studentClass}</td>
                <td>{t.location}</td>
                <td>{t.email}</td>
                <th>
                  <button
                    onClick={() => handleApprove(t._id)}
                    className="btn btn-success btn-sm mt-2 mx-2"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleDelete(t._id)}
                    className="btn btn-success btn-sm mt-2 "
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
  );
};

export default AdminDashboard;
