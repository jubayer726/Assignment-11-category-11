import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../Utils";
import axios from "axios";
import signupImg from "../../assets/images/signin.png";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);
  const onSubmit = async (data) => {
    const { name, role, image, email, password } = data;
    const imageFile = image[0];

    try {
      const photoURL = await imageUpload(imageFile);

      //1. User Registration
      const result = await createUser(email, password);

      // User API
      const userInfo = {
        email: data.email,
        displayName: data.name,
        role: data.role,
        photoURL: photoURL,
      };
      axios
        .post(`${import.meta.env.VITE_API_URL}/users`, userInfo)
        .then((result) => {
          if (result.data.insertedId) {
            console.log("user created in the database");
          }
        });
      // Save username & profile photo
      await updateUserProfile(name, photoURL, role);

      navigate(from, { replace: true });
      toast.success("Signup Successful");

      console.log(result);
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  // Handle Google Signin
  const handleGoogleSignIn = async () => {
    try {
      //User Registration using google
      await signInWithGoogle().then((result) => {
        console.log(result.user);
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          role: "student",
        };
        axios
          .post(`${import.meta.env.VITE_API_URL}/users`, userInfo)
          .then((result) => {
            console.log(result.data);
            navigate(from, { replace: true });
          });
      });

      navigate(from, { replace: true });
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex justify-center items-center gap-24 min-h-screen bg-white"
    >
      <div>
        <motion.img
          src={signupImg}
          alt="Floating Image"
          className="w-full max-w-md mx-auto hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-4 text-center">
          <h1 className="my-2 text-4xl font-bold text-purple-600">
            Sign <span className="text-[#167570]">Up</span>
          </h1>
          <p className="text-sm text-gray-400">Welcome to eTutionBd</p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-600 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                {...register("name", {
                  required: "Name is required",
                  maxLength: {
                    value: 20,
                    message: "Name cannot be too long",
                  },
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Phone Number */}
            <div>
              <label htmlFor="mobile" className="block mb-2 text-sm">
                Mobile Number
              </label>
              <input
                type="number"
                id="mobile"
                placeholder="Enter Your Mobile Number Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-purple-600 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                {...register("mobile", {
                  required: "Mobile Number is required",
                  maxLength: {
                    value: 11,
                    message: "Mobile Number Should be 11 number",
                  },
                })}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.mobile.message}
                </p>
              )}
            </div>
            {/* Image */}
            <div>
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Profile Image
              </label>
              <input
                name="image"
                type="file"
                id="image"
                accept="image/*"
                className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-lime-50 file:text-purple-600
                    hover:file:bg-lime-100
                    bg-gray-100 border border-dashed border-lime-300 rounded-md cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-lime-400
                    py-2"
                {...register("image")}
              />
              <p className="mt-1 text-xs text-gray-400">
                PNG, JPG or JPEG (max 2MB)
              </p>
            </div>

            {/* Add role */}
            <div className="space-y-1 text-sm">
              <label htmlFor="role" className="block text-gray-600 ">
                Add Role
              </label>
              <select
                {...register("role", { required: "Role is required" })}
                className="w-full px-4 py-3 border-lime-300 focus:outline-lime-500 rounded-md bg-gray-200"
              >
                <option value="student">student</option>
                <option value="tutor">tutor</option>
              </select>
            </div>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
            )}

            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                autoComplete="new-password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <button type="submit" className="btn-primary w-full">
              Register
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-purple-600 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};

export default SignUp;
