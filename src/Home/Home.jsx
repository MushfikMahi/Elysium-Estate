import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "../Shered/NavBar/Navbar";
import Estates from "./Estates/Estates";

const Home = () => {
  const AllData = useLoaderData();

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896718.jpg?t=st=1712988136~exp=1712991736~hmac=6bebbe7727d8544369d39984e2778a9d3ae1aa5134c6cc6612bac228d78b0b1b&w=996)",
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div>
        <Banner></Banner>
        <h3 className="text-3xl font-bold text-center my-10">
          Availavle Estates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {AllData.map((data) => (
            <Estates key={data.id} data={data}></Estates>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
