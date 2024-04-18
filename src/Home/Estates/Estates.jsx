import { FaDollarSign, FaRegMap } from "react-icons/fa6";
import { IoIosAlert } from "react-icons/io";
import { Link } from "react-router-dom";

const Estates = ({ data }) => {
  const {
    image_url,
    estate_title,
    id,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = data;
  return (
    <div>
      <div className="card glass">
        <figure>
          <img src={image_url} className="w-full h-[200px]" alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{description.slice(0, 100)}.....</p>
          <div className="">
            <p className="flex items-center gap-2 py-1 px-5">
              {" "}
              <span className="text-green-500">
                <IoIosAlert />
              </span>{" "}
              For : {status}
            </p>
            <h4 className="flex items-center gap-2 py-1 px-5 ">
              <span className="text-green-500">
                <FaDollarSign />
              </span>{" "}
              Price : {price}
            </h4>
            <p className="flex items-center gap-2 py-1 px-5">
              <span className="text-green-500">
                <FaRegMap />
              </span>{" "}
              Area : {area}
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/estate/${id}`} className="btn bg-green-500 text-white">
              Property Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estates;
