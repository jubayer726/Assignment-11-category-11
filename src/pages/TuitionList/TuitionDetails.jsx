import { useNavigate, useParams } from "react-router";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import avatarImg from "../../assets/images/cart.jpg";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
// import { useState } from "react";

const TuitionDetails = () =>{
  const { user } = useAuth();

    const {id} = useParams();
    const navigate = useNavigate()
    
    const {data: student = {}, isLoading} = useQuery({
      queryKey: ['student', id],
      queryFn: async () =>{
        const result = await axios(`${import.meta.env.VITE_API_URL}/tuitions/${id}`)
        return result.data;
      }

    })
  
   const {name, email, studentClass, location, subjects, salary, daysPerWeek, image, description} = student;

  //  const handleDelete = async () => {
  //   const confirm = window.confirm("Are you sure you want to delete this tuition?");
  //   if (!confirm) return;

  //   try {
  //     await axios.delete(`${import.meta.env.VITE_API_URL}/tuitions/${id}`);
  //     toast.success("Tuition Deleted Successfully!");
  //     navigate("/");
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Failed to delete tuition");
  //   }
  // };

  const handleApply = async () => {
    const applicationData = {
      tuitionId: student._id,
      tuitionTitle: student.title,
      studentEmail: student.email,
      studentName: student.name,
      subjects: student.subjects,
      tutorEmail: user.email,
      tutorName: user.displayName,
      tutorPhoto: user.photoURL,
      price:  parseInt(student.salary),
    };

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/applications`,
        applicationData
      );

      toast.success("Applied successfully!");
    } catch (err) {
      console.log(err.message);
      toast.error("Failed to apply");
    }
  };
    if(isLoading) return <LoadingSpinner/>

  return (
    <div className="max-w-4xl mx-auto p-6">

      {/* Header */}
      <div className="bg-base-200 p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center">Student Details</h1>
        <p className="mt-2 text-gray-600 text-center">
          Full information about the student, academic level and contact details.
        </p>
      </div>

      {/* Student Basic Info */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
         <div> <img src={image && image? image: avatarImg} 
         alt="Sudent Photo" className="w-40 h-48 object-cover rounded-lg"/></div>
         <div>
           <p><strong>Name:</strong> {name}</p>
           <p><strong>Email:</strong> {email}</p>
          <p><strong>Class:</strong> {studentClass}</p>
          <p><strong>School:</strong> Dhanmondi Govt. School</p>
         </div>
        </div>
      </div>

      {/* Address Info */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Address Information</h2>

        <p className="text-gray-700">
          <strong>Full Address:</strong> {location}</p>
      </div>

      {/* Tuition Preference */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Tuition Preference</h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <p><strong>Preferred Subjects:</strong> {subjects}</p>
          <p><strong>Preferred Schedule:</strong> Evening</p>
          <p><strong>Days per Week:</strong> {daysPerWeek}</p>
          <p><strong>Budget:</strong> {salary} BDT / Month</p>
        </div>
      </div>

      {/* Extra Notes */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-2xl font-semibold mb-4">Additional Notes</h2>

        <p className="text-gray-700">
          {description}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center gap-4">
        <button onClick={handleApply} className="btn btn-info"> Apply Now</button>
        {/* <button  onClick={() => navigate(`/update-tuition/${id}`)} className="btn btn-primary">Edit Details</button>
        <button onClick={handleDelete} className="btn btn-secondary">Delete Post</button> */}
        
      </div>

    </div>
  );
}
export default TuitionDetails 
