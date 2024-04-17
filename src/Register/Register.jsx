import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { FaGithub, FaGoogle } from "react-icons/fa6";
const Register = () => {
  const {
    emailPassCreateUser,
    googleCreateUser,
    gitHubCreateUser,
    updateUser,
  } = useContext(AuthContext);
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
              updateUser("name", "https://ibb.co/S6MHWFc");
              console.log(name, photo);
            })
            .catch((error) => toast.error(error.message));
        } else {
          toast("your password must have to contain 1 lowercase");
          console.log("your password must have to contain 1 lowercase");
        }
      } else {
        toast("Your password must contain 1 uppercase letter");
        console.log("Your password must contain 1 uppercase letter");
      }
    } else {
      toast("Your password mush contain at least 6 carecters");
      console.log("Your password mush contain at least 6 carecters");
    }
  };
  const handelGoogleSignIn = () => {
    googleCreateUser()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  const handelGitHubSignIn = () => {
    gitHubCreateUser()
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896718.jpg?t=st=1712988136~exp=1712991736~hmac=6bebbe7727d8544369d39984e2778a9d3ae1aa5134c6cc6612bac228d78b0b1b&w=996)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered bg-transparent"
                    required
                  />
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
              <div className="mt-5">
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
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;
