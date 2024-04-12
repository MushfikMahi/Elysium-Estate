import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { emailPassLogIn } = useContext(AuthContext);
  const hadleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    emailPassLogIn(email, password)
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Elysium - Login</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="w-full rounded-2xl p-5 max-w-md shadow-2xl bg-base-100">
          <form onSubmit={hadleLogin}>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mt-5">
            Don&apos;t have an account ?{" "}
            <Link to={"/register"} className="text-red-500 hover:link">
              Rgister
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
