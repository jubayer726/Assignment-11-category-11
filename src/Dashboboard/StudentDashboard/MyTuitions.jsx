// import React from "react";
// import useAuth from "../../hooks/useAuth";
// import { useNavigate, useParams } from "react-router";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import toast from "react-hot-toast";
// import LoadingSpinner from "../../components/Shared/LoadingSpinner";

// const MyTuitions = () => {
//   const { user } = useAuth();

//   const { id } = useParams();
//   const navigate = useNavigate();

//   const {
//     data: tuitions = [], refetch, isLoading} = useQuery({
//     queryKey: ["studentTuitions", user?.email],
//     enabled: !!user?.email,
//     queryFn: async () => {
//       const res = await axios.get(
//         `${import.meta.env.VITE_API_URL}/student/tuitions/${user.email}`
//       );
//       return res.data;
//     },
//   });

//   const handleDelete = async () => {
//     const confirm = window.confirm(
//       "Are you sure you want to delete this tuition?"
//     );
//     if (!confirm) return;

//     try {
//       await axios.delete(`${import.meta.env.VITE_API_URL}/tuitions/${id}`);
//       toast.success("Tuition Deleted Successfully!");
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to delete tuition");
//     }
//   };

//   if (isLoading) return <LoadingSpinner />;
//   return (
//     <div>
//       <div className="border border-gray-600 p-5 m-5">
//         <h2 className="text-2xl font-bold mb-4 p-5">Tutor Applycation</h2>
//         <div className="overflow-x-auto">
//           <table className="table">
//             {/* head */}
//             <thead>
//               <tr>
//                 <th></th>
//                 <th>Date</th>
//                 <th>Subjects</th>
//                 <th>Location</th>
//                 <th>Salary (USD)</th>
//                 <th>Email</th>
//                 <th>Status</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tuitions.map((t, i) => (
//                 <tr key={t._id}>
//                   <td>{i + 1}</td>
//                   <td>{t.createdAt}</td>
//                   <td>{t.subjects}</td>
//                   <td>{t.location}</td>
//                   <td>{t.salary}</td>
//                   <td>{t.email}</td>
//                   <td>
//                     <span className="badge badge-info">{t.status}</span>
//                   </td>
//                   <th>
//                     {/* <button
//                       onClick={() => handlePayment(t)}
//                       className="btn btn-success btn-sm mt-2 mx-2"
//                     >
//                       Accept & Pay
//                     </button> */}

//                     <button
//                       onClick={() => navigate(`/dashboard/update-tuition/${id}`)}
//                       className="btn btn-primary m-2"
//                     >
//                       Edit Details
//                     </button>
//                     <button
//                       onClick={handleDelete}
//                       className="btn btn-secondary"
//                     >
//                       Delete Post
//                     </button>

//                     {/* <button
//                       onClick={() => handleReject(t._id)}
//                       className="btn btn-error btn-sm mt-2 "
//                     >
//                       Reject
//                     </button> */}
//                   </th>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyTuitions;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const MyTuitions = () => {
  const { user } = useAuth();

  const { data: tuitions = [], refetch } = useQuery({
    queryKey: ["myTuitions", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tuitions/student/${user.email}`
      );
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (!confirm) return;

    await axios.delete(`${import.meta.env.VITE_API_URL}/tuitions/${id}`);
    toast.success("Tuition deleted");
    refetch();
  };

  return (
    <div className="bg-gray-100">
      <h2 className="text-2xl font-bold  p-8">My Tuition Posts</h2>

     <div className="grid grid-cols-4 gap-8">
       {tuitions.map((t) => (
        <div key={t._id} className="bg-white p-4 m-5 rounded mb-3">
          <h3 className="font-semibold">{t.title}</h3>
          <p>Class: {t.studentClass}</p>
          <p>Salary: {t.salary} $</p>
          <p>
            Status:{" "}
            <span
              className={`badge ${
                t.status === "approved"
                  ? "badge-success"
                  : t.status === "pending"
                  ? "badge-warning"
                  : "badge-error"
              }`}
            >
              {t.status}
            </span>
          </p>

          <div className="mt-3 flex gap-2">
            <Link
              to={`/dashboard/edit-tuition/${t._id}`}
              className="btn btn-sm btn-info"
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(t._id)}
              className="btn btn-sm btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      {tuitions.length === 0 && (
        <p className="text-gray-500">No tuition posts found.</p>
      )}
     </div>
    </div>
  );
};

export default MyTuitions;

