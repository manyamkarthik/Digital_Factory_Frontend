import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/authActions";

const Nav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <Link to="/" className="text-white text-xl font-bold">
          To-Do App
        </Link>


        <div className="flex space-x-4">
          {isAuthenticated ? (
            <>
              <Link
                to="/tasks"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Tasks
              </Link>
              <button
                onClick={() => dispatch(logout())}
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-white hover:text-gray-200 transition duration-300"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
