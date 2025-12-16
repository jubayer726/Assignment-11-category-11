import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";

const UpdateProfile = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  //  Load existing data
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/users/${user.email}`)
        .then((res) => reset(res.data));
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/users/${user.email}`,
        data
      );

      toast.success("Profile updated successfully!");
    } catch (err)  {
        console.log(err);
      toast.error("Update failed!");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input
          {...register("name")}
          placeholder="Full Name"
          defaultValue={user.displayName}
          className="w-full border p-2 rounded"
        />

        <input
          {...register("photo")}
          placeholder="Photo URL"
          defaultValue={user.photoURL}
          className="w-full border p-2 rounded"
        />

        <input
          {...register("phone")}
          placeholder="Phone Number"
          className="w-full border p-2 rounded"
        />

        <textarea
          {...register("address")}
          placeholder="Address"
          className="w-full border p-2 rounded"
        />

        <button className="btn btn-primary w-full">
          Update Profile
        </button>

      </form>
    </div>
  );
};

export default UpdateProfile;
