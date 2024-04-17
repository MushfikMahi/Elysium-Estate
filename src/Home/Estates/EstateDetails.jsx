import { useLoaderData, useParams } from "react-router-dom";
import { IoIosAlert } from "react-icons/io";
import { FaRegMap, FaDollarSign } from "react-icons/fa6";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { Marker, Popup } from "leaflet";
const EstateDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const estate = data.find((s_data) => s_data.id == id);
  const {
    image_url,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = estate;
  {
    facilities.map((fac) => console.log(fac));
  }
  const position = [51.505, 10.09];
  return (
    <div>
      <div className="container mx-auto flex pt-16 gap-5 min-h-screen items-center">
        <div className="flex-1">
          <img src={image_url} className="w-full rounded-2xl" alt="" />
        </div>
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl font-bold">{estate_title}</h2>
          <p className="">
            {segment_name} : {location}
          </p>
          <p>{description}</p>
          <hr />
          <div className="">
            <p className="flex items-center gap-2 py-1 px-5 w-2/5">
              {" "}
              <span className="text-green-500">
                <IoIosAlert />
              </span>{" "}
              For : {status}
            </p>
            <div className="flex gap-5">
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
          </div>
          <hr />
          <div className="space-y-3">
            <h4 className="text-xl font-bold">Facilities : </h4>
            <div className="grid grid-cols-2 gap-3">
              {facilities.map((fac, idx) => (
                <li className="py-1 list-disc px-5 " key={idx}>
                  {fac}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-80">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div> */}
    </div>
  );
};

export default EstateDetails;
