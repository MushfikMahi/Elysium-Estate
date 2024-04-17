import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Estates from "./Estates/Estates";

const Home = () => {
  const AllData = useLoaderData();

  return (
    <div className="min-h-screen">
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div>
        <Banner></Banner>
        <h3 className="text-3xl font-bold text-center md:my-20 my-10">
          Availavle Estates
        </h3>
        <div className="grid grid-cols-1 md:my-20 my-10 md:grid-cols-2 lg:grid-cols-3 gap-5  container mx-auto">
          {AllData.map((data) => (
            <Estates key={data.id} data={data}></Estates>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
