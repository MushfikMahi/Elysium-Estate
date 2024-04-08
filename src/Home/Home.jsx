import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "../Shered/NavBar/Navbar";
import Estates from "./Estates/Estates";

const Home = () => {
  const AllData = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <h3 className="text-3xl font-bold text-center my-10 text-white">
        Availavle Estates
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {AllData.map((data) => (
          <Estates key={data.id} data={data}></Estates>
        ))}
      </div>
    </div>
  );
};

export default Home;
