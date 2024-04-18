import { useLoaderData } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Testimony = () => {
  const AllData = useLoaderData();
  return (
    <div className="py-40">
      <div className="text-center">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {AllData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="md:p-20 p-5 space-y-2 rounded-3xl border md:mx-20 mx-10 shadow-2xl">
                <h3 className="text-3xl font-bold">{data.name}</h3>
                <h5 className="font-bold">{data.location}</h5>
                <p>{data.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimony;
