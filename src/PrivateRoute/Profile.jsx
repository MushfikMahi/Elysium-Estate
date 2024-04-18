import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
const Profile = () => {
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
            <div className="flex flex-col items-center space-y-5">
              <img
                className="h-32 w-32 rounded-full border-green-500 border-4"
                src={user.photoURL}
                alt=""
              />
              <h3 className="text-3xl font-bold">Name : {user.displayName}</h3>
              <p className="text-xl">Email : {user.email}</p>
              <Helmet>
                <title>Elysium - Profile</title>
              </Helmet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
