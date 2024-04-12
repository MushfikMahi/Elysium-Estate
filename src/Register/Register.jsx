import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
const Register = () => {
  const { emailPassCreateUser, googleCreateUser } = useContext(AuthContext);
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
            .then((res) => console.log(res.user))
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
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Elysium - Register</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="w-full rounded-2xl p-5 max-w-md shadow-2xl bg-base-100">
          <form onSubmit={hadleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
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
                className="input input-bordered"
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
                className="input input-bordered"
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
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="mt-5">
            Already have an account ?{" "}
            <Link to={"/login"} className="text-red-500 hover:link">
              Login
            </Link>
          </p>
          <div>
            <button className="btn" onClick={handelGoogleSignIn}>
              sign in with Google
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
