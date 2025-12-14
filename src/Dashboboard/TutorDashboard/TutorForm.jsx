import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const TutorForm = () => {
  const {user} = useAuth();
  const { register, handleSubmit, formState: { errors }, reset} = useForm();

  const [loading, setLoading] = useState(false);

  const imgUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;

  const onSubmit = async (data) => {

    try {
      setLoading(true);
      // Uploading photo to imgbb
      const imgFile = new FormData();
      imgFile.append("image", data.photo[0]);
      const imgRes = await axios.post(imgUrl, imgFile);

      const photoURL = imgRes.data.data.url;

      // Prepare final data
      const tutorData = {
        ...data,
        photo: photoURL,
        email: user.email,
      };

      console.log("Final Tutor Data:", tutorData);

      // Send to backend (future API)
      await axios.post("http://localhost:3000/tutors", tutorData);

      toast.success("Application Submitted Successfully!");
      reset();
      setLoading(false);
    } 
    catch (error) {
      console.error(error);
      toast.error("Image Upload Failed!");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
        Tutor Application Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Full Name */}
        <div>
          <label className="font-medium">Full Name</label>
          <input
            {...register("name", { required: true })}
            className="border p-3 rounded w-full"
            placeholder="Your name"
          />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
        </div>

        {/* Email */}
        {/* <div>
          <label className="font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="border p-3 rounded w-full"
            placeholder="Your email"
          />
          {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
        </div> */}

        {/* Phone */}
        <div>
          <label className="font-medium">Phone</label>
          <input
            type="number"
            {...register("phone", { required: true })}
            className="border p-3 rounded w-full"
            placeholder="017XXXXXXXX"
          />
          {errors.phone && <p className="text-red-500 text-sm">Phone is required</p>}
        </div>

        {/* Age */}
        <div>
          <label className="font-medium">Experiance</label>
          <input
            type="number"
            {...register("experiance", { required: true })}
            className="border p-3 rounded w-full"
            placeholder="Your experiance"
          />
          {errors.experiance && <p className="text-red-500 text-sm">Experiance is required</p>}
        </div>

        {/* Qualification */}
        <div>
          <label className="font-medium">Highest Qualification</label>
          <input
            {...register("qualification", { required: true })}
            className="border p-3 rounded w-full"
            placeholder="HSC / Honours / Masters"
          />
          {errors.qualification && (
            <p className="text-red-500 text-sm">Qualification is required</p>
          )}
        </div>

        {/* Subjects */}
        <div className="md:col-span-2">
          <label className="font-medium">Subjects You Can Teach</label>
          <input
            {...register("subjects", { required: true })}
            className="border p-3 rounded w-full"
            placeholder="Math, English, Science..."
          />
          {errors.subjects && (
            <p className="text-red-500 text-sm">Subjects required</p>
          )}
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label className="font-medium">Address</label>
          <input
            {...register("address", { required: true })}
            className="border p-3 rounded w-full"
            placeholder="Your full address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">Address is required</p>
          )}
        </div>

        {/* Experience */}
        <div className="md:col-span-2">
          <label className="font-medium">Teaching Experience (optional)</label>
          <textarea
            {...register("experience")}
            className="border p-3 rounded w-full"
            rows="4"
            placeholder="Describe your experience"
          ></textarea>
        </div>

        {/* Photo Upload */}
        <div className="md:col-span-2">
          <label className="font-medium">Upload Your Photo</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="border p-3 rounded w-full"
            accept="image/*"
          />
          {errors.photo && (
            <p className="text-red-500 text-sm">Photo is required</p>
          )}
        </div>

        {/* Expected salary */}
        <div className="md:col-span-2">
          <label className="font-medium">Expected salary</label>
          <input type="number"
            {...register("price", { required: true })}
            className="border p-3 rounded w-full"
            placeholder="Expected salary USD/month"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">Salary is required</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="md:col-span-2 bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
        >
          {loading ? "Uploading..." : "Submit Application"}
        </button>

      </form>
    </div>
  );
};

export default TutorForm;
