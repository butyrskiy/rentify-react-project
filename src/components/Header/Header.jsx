import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-yellow-200 shadow-md">
      <div className="flex justify-between items-center mx-auto max-w-6xl p-3">
        <Link to="/">
          <h1 className="text-gray-800 font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer">
            Rentify
          </h1>
        </Link>
        <form className="bg-yellow-50 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Поиск..."
            className="bg-transparent focus: outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-gray-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-gray-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-gray-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className=" text-gray-700 hover:underline cursor-pointer">
              Sign in
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
