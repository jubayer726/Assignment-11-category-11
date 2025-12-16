import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const EditTuition = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/tuitions/${id}`)
      .then((res) => reset(res.data));
  }, [id, reset]);

  const onSubmit = async (data) => {
    await axios.put(`${import.meta.env.VITE_API_URL}/tuitions/${id}`, data);
     const confirm = window.confirm(
      "Are you sure you want to delete this tuition?"
    );
    if (!confirm) return;
    toast.success("Tuition updated, waiting for admin approval");
    navigate("/dashboard/my-tuition");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-3"
    >
      <h2 className="text-xl font-bold">Edit Tuition</h2>

      <input {...register("title")} className="input input-bordered w-full" />
      <input {...register("studentClass")} className="input input-bordered w-full" />
      <input {...register("subjects")} className="input input-bordered w-full" />
      <input {...register("salary")} type="number" className="input input-bordered w-full" />
      <input {...register("location")} className="input input-bordered w-full" />
      <input {...register("daysPerWeek")} className="input input-bordered w-full" />

      <textarea
        {...register("description")}
        className="textarea textarea-bordered w-full"
      />

      <button className="btn btn-primary w-full">Update</button>
    </form>
  );
};

export default EditTuition;
