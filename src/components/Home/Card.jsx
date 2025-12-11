import { Link } from "react-router";
import avatarImg from "../../assets/images/cart.jpg";

const Card = ({ stdn }) => {
  const { title, image, subjects, salary, studentClass } = stdn;
  return (
    <Link
      to={`/plant/1`}
      className="col-span-1 cursor-pointer group shadow-xl p-3 rounded-xl"
    >
      <div>
        <img
          src={image && image ? image : avatarImg}
          alt=""
          className="w-full h-40 object-cover rounded-lg"
        />

        <h3 className="text-lg font-semibold mt-4">{title}</h3>
        <p className="text-gray-600 text-sm">Subject: {subjects}- {studentClass}</p>

        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-indigo-600">tk{salary}/month</p>
          <button className="px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
