import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { emailPassCreateUser, updateUser } = useContext(AuthContext);
  const hadleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    // console.log(email, password, name, photo);
    if (/.{6,}/.test(password)) {
      if (/.*[A-Z].*/.test(password)) {
        if (/.*[a-z].*/.test(password)) {
          emailPassCreateUser(email, password)
            .then(() => {
              navigate(location?.state ? location.state : "/"),
                toast("You have sucessfully Registered", {
                  className: "pt-20",
                });
              updateUser(name, photo);
              console.log(name, photo);
            })
            .catch((error) =>
              toast.error(error.message, {
                className: "mt-20",
              })
            );
        } else {
          toast.error("your password must have to contain 1 lowercase", {
            className: "mt-20",
          });
        }
      } else {
        toast.error("Your password must contain 1 uppercase letter", {
          className: "mt-20",
        });
      }
    } else {
      toast.error("Your password mush contain at least 6 carecters", {
        className: "mt-20",
      });
    }
  };
  const [showPass, setShowPass] = useState(false);
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896718.jpg?t=st=1712988136~exp=1712991736~hmac=6bebbe7727d8544369d39984e2778a9d3ae1aa5134c6cc6612bac228d78b0b1b&w=996)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="mt-20">
        <ToastContainer />
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div className="hero">
          <Helmet>
            <title>Elysium - Register</title>
          </Helmet>
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold mt-20">Register now!</h1>
            </div>
            <div className="w-full rounded-2xl p-5 max-w-md shadow-2xl glass">
              <form onSubmit={hadleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered bg-transparent"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-transparent"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered bg-transparent"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered bg-transparent"
                    required
                  />
                  <span
                    className="absolute right-3 bottom-4 text-black "
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-transparent border-green-500 hover:border-transparent text-white hover:bg-green-400">
                    Register
                  </button>
                </div>
              </form>
              <p className="mt-5 text-white">
                Already have an account ?{" "}
                <Link to={"/login"} className="text-sky-500 hover:link">
                  Login
                </Link>
              </p>
              {/* <div className="mt-5">
                <button
                  className="btn bg-transparent w-full border-green-500 hover:border-transparent text-white hover:bg-green-400"
                  onClick={handelGoogleSignIn}
                >
                  <FaGoogle />
                  Sign in with Google
                </button>
              </div>
              <div className="mt-5">
                <button
                  className="btn bg-transparent w-full border-green-500 hover:border-transparent text-white hover:bg-green-400"
                  onClick={handelGitHubSignIn}
                >
                  <FaGithub />
                  Sign in with GitHUb
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
