import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { emailPassUser, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res, "log outted"))
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-gray-900 bg-opacity-40 text-white">
      <Helmet>
        <title>Elysium - Home</title>
      </Helmet>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Elysium Estates</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {emailPassUser ? (
        <div>
          {" "}
          <button onClick={handleLogOut} className="btn">
            Log Out
          </button>{" "}
          <div className="w-10 rounded-full">
            <img alt="user" src={emailPassUser.photoURL} />
          </div>
        </div>
      ) : (
        <Link to={"/login"} className="btn">
          Log In
        </Link>
      )}
    </div>
  );
};

export default Navbar;
