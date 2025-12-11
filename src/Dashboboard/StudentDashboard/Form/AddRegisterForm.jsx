import { useState } from "react";
import axios from "axios";
import useAuth from './../../../hooks/useAuth';
import toast from "react-hot-toast";

const AddRegisterForm = () => {
  const {user} = useAuth();
  const [formData, setFormData] = useState({
    title: "",
    studentClass: "",
    subjects: "",
    salary: "",
    location: "",
    daysPerWeek: "",
    description: "",
    name: user.displayName,
    image: user.photoURL
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/tuitions", formData);
      console.log(res.data);
      toast.success("Tuition Post Submitted Successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit!");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Post a Tuition</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Tuition Title"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />

        {/* <input
          type="text"
          name="studentClass"
          placeholder="Student Class (e.g. Class 8)"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />
         */}
        <select
          name="studentClass"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        >
          <option value="">Select Class</option>
          <option value="Class Five">Class Five</option>
          <option value="Class Six">Class Six</option>
          <option value="Class Seven">Class Seven</option>
          <option value="Class Eight">Class Eight</option>
          <option value="Class Nine">Class Nine</option>
          <option value="Class Ten">Class Ten</option>
        </select>

        <input
          type="text"
          name="subjects"
          placeholder="Subjects (e.g. Math, English)"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary (BDT)"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location (e.g. Mirpur-10)"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="daysPerWeek"
          placeholder="Days per week (e.g. 3 days)"
          className="w-full border px-4 py-2 rounded"
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Write description..."
          className="w-full border px-4 py-2 rounded"
          rows="4"
          onChange={handleChange}
          required
        />

        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">
          Submit Tuition
        </button>
        
      </form>
    </div>
  );
};

export default AddRegisterForm;
