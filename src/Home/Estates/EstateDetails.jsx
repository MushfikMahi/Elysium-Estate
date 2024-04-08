import { useLoaderData, useParams } from "react-router-dom";

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
  return (
    <div className="container mx-auto">
      <img src={image_url} className="w-full rounded-2xl" alt="" />
      <h4 className="text-3xl font-bold">{price}</h4>
      <p className="font-bold">
        {segment_name} : {location}
      </p>
      <h2 className="text-4xl font-bold">{estate_title}</h2>
      <p>{description}</p>
      <p>For : {status}</p>
      <p>Area : {area}</p>
      <div>
        <h4>Facilities : </h4>
        {facilities.map((fac, idx) => (
          <p className="pl-10" key={idx}>
            {fac}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EstateDetails;
