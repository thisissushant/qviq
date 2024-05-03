import {} from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <div className="text-5xl font-extrabold m-20 pt-36">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Welcome QbiQ
          </span>
        </div>
        <div className="flex justify-center gap-10">
          <Link to={"/signin"}>
            <button
              type="button"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl h-14 w-full p-2 text-white font-semibold"
            >
              Sign In
            </button>
          </Link>
          <Link to={"/signup"}>
            <button
              type="button"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-xl h-14 w-full p-2 text-white font-semibold"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
