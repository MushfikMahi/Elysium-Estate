import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const handelProfileUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUser(name, photo);
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
      <div className="hero-content text-center text-neutral-content my-20">
        <div className="glass p-10 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div>
              <div>
                <Helmet>
                  <title>Elysium - Update Profile</title>
                </Helmet>
                <div className="hero-content flex-col">
                  <div className="text-center">
                    <h1 className="text-5xl font-bold text-white">
                      Update Now!
                    </h1>
                  </div>
                  <div className="w-full rounded-2xl p-5 max-w-md shadow-2xl">
                    <form onSubmit={handelProfileUpdate}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">Name</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="name"
                          className="input input-bordered bg-transparent"
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-white">
                            Photo URL
                          </span>
                        </label>
                        <input
                          type="text"
                          name="photo"
                          placeholder="PhotoURL"
                          className="input input-bordered bg-transparent"
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn  bg-transparent w-full border-green-500 hover:border-transparent text-white hover:bg-green-400">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
