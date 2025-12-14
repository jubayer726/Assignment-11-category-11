import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";

const AddRegisterForm = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const tuitionData = {
      ...data,
      email: user.email,
      name: user.displayName,
      image: user.photoURL,
      status: "pending",
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/tuitions`,
        tuitionData
      );

      if (res.data.insertedId) {
        toast.success("Tuition Post Submitted Successfully!");
        reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit!");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Post a Tuition</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        {/* Title */}
        <input
          {...register("title", { required: true })}
          type="text"
          placeholder="Tuition Title"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.title && <p className="text-red-500">Title is required</p>}

        {/* Class */}
        <select
          {...register("studentClass", { required: true })}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">Select Class</option>
          <option value="Class Five">Class Five</option>
          <option value="Class Six">Class Six</option>
          <option value="Class Seven">Class Seven</option>
          <option value="Class Eight">Class Eight</option>
          <option value="Class Nine">Class Nine</option>
          <option value="Class Ten">Class Ten</option>
          <option value="Class Eleven">Class Eleven</option>
          <option value="Class Twelve">Class Twelve</option>
        </select>
        {errors.studentClass && (
          <p className="text-red-500">Class is required</p>
        )}

        {/* Subjects */}
        <input
          {...register("subjects", { required: true })}
          type="text"
          placeholder="Subjects (e.g. Math, English)"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.subjects && (
          <p className="text-red-500">Subjects are required</p>
        )}

        {/* Salary */}
        <input
          {...register("salary", { required: true })}
          type="number"
          placeholder="Salary (BDT)"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.salary && (
          <p className="text-red-500">Salary is required</p>
        )}

        {/* Location */}
        <input
          {...register("location", { required: true })}
          type="text"
          placeholder="Location (e.g. Mirpur-10)"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.location && (
          <p className="text-red-500">Location is required</p>
        )}

        {/* Days per week */}
        <input
          {...register("daysPerWeek", { required: true })}
          type="text"
          placeholder="Days per week (e.g. 3 days)"
          className="w-full border px-4 py-2 rounded"
        />
        {errors.daysPerWeek && (
          <p className="text-red-500">Days per week required</p>
        )}

        {/* Description */}
        <textarea
          {...register("description", { required: true })}
          placeholder="Write description..."
          className="w-full border px-4 py-2 rounded"
          rows="4"
        />
        {errors.description && (
          <p className="text-red-500">Description is required</p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded"
        >
          Submit Tuition
        </button>
      </form>
    </div>
  );
};

export default AddRegisterForm;
