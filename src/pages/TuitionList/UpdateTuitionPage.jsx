import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";
import toast from "react-hot-toast";

const UpdateTuition = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const { data: tuition = {}, isLoading } = useQuery({
    queryKey: ["tuition", id],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tuitions/${id}`
      );
      reset(res.data);
      return res.data;
    },
  });

  const onSubmit = async (data) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/tuitions/${id}`,
        data
      );
      toast.success("Tuition Updated Successfully!");
      navigate("/tuitions");
    } catch (error) {
      console.error(error);
      toast.error("Update failed!");
    }
  };

  if (isLoading) return <LoadingSpinner/>

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Update Tuition</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} defaultValue={tuition.name} className="input input-bordered w-full" placeholder="Student Name" />
        <input {...register("studentClass")} className="input input-bordered w-full" placeholder="Class" />
        <input {...register("subjects")} className="input input-bordered w-full" placeholder="Subjects" />
        <input {...register("location")} className="input input-bordered w-full" placeholder="Location" />
        <input {...register("salary")} className="input input-bordered w-full" placeholder="Salary" />
        <input {...register("daysPerWeek")} className="input input-bordered w-full" placeholder="Days per week" />

        <textarea
          {...register("description")}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        />

        <button className="btn btn-primary w-full">Update Tuition</button>
      </form>
    </div>
  );
};

export default UpdateTuition;
