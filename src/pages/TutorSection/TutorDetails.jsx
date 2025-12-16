import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import toast from "react-hot-toast";

 const TutorDetails= () =>{
 
  const {id} = useParams();

      const {data: tutor = {}, isLoading} = useQuery({
        queryKey: ['tutor', id],
        queryFn: async () =>{
          const result = await axios(`${import.meta.env.VITE_API_URL}/tutors/${id}`)
          return result.data;
        }
  
      })
      if(isLoading) return <LoadingSpinner/>
   
     const {_id, name, phone, address, subjects, price, qualification, photo, email} = tutor || {};
     
     const handleApply = async () =>{
      toast.success("Applycation send to The Tutor")
     }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="bg-base-200 p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center">Tutor Details</h1>
        <p className="mt-2 text-gray-600 text-center">
          Find all information about the tuition class, teacher, schedule, and fees.
        </p>
      </div>

      {/* Tuition Info */}
      <div className="mt-6 grid md:grid-cols-2 gap-6 border">
        
        {/* Tuition Card */}
        <div className="bg-base-100 shadow rounded-xl pb-5">
          <h2 className="text-xl font-semibold p-5 text-center">Tutor</h2>
          <div className="flex items-center justify-center"> <img src={photo} 
            alt="Sudent Photo" className="w-full h-48 object-cover rounded-2xl px-5"/></div>
        </div>

        {/* Teacher Card */}
        <div className="bg-base-100 shadow rounded-xl p-5">
          <h2 className="text-xl font-semibold">Teacher Information</h2>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li><strong>Name:</strong> {name}</li>
            <li><strong>Qualification:</strong> {qualification}</li>
            <li><strong>Subject:</strong> {subjects}</li>
            <li><strong>Locatin:</strong> {address}</li>
            <li><strong>Email:</strong> {email}</li>
            <li><strong>Mobile:</strong> {phone}</li>
            <li><strong>Rating:</strong> ⭐⭐⭐⭐☆ (4.5)</li>
          </ul>
        </div>

      </div>

      {/* Schedule */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-xl font-semibold mb-3">Class Schedule</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-base-200 p-4 rounded-lg">
            <h3 className="font-semibold">Days</h3>
            <p>Sunday, Tuesday, Thursday</p>
          </div>

          <div className="bg-base-200 p-4 rounded-lg">
            <h3 className="font-semibold">Time</h3>
            <p>5:00 PM - 6:30 PM</p>
          </div>

          <div className="bg-base-200 p-4 rounded-lg">
            <h3 className="font-semibold">Duration</h3>
            <p>1.5 Hours / Class</p>
          </div>
        </div>
      </div>

      {/* Fees */}
      <div className="mt-6 bg-base-100 p-6 rounded-xl shadow border">
        <h2 className="text-xl font-semibold mb-3">Tuition Fees</h2>

        <div className="flex justify-between text-lg">
          <p>Monthly Fee (USD)</p>
          <p className="font-bold">{price}</p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-8 text-center">
        <button onClick={handleApply} className="btn btn-primary btn-wide text-lg"> Apply</button>
      </div>
    </div>
  );
}
export default TutorDetails;
