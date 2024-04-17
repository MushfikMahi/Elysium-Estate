// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <div className="">
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
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/light-garden-luxury-pool-nature_1203-4908.jpg?w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                  Exclusive Properties for Discerning Clients
                </h1>
                <p className="mb-5 text-sm md:text-base">
                  Indulge in opulence with our collection of meticulously
                  designed residences that redefine the meaning of luxury. With
                  unparalleled attention to detail and world-class amenities,
                  these estates offer a lifestyle of sophistication and
                  refinement.
                </p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/modern-luxury-domestic-room-comfortable-relaxation-generative-ai_188544-12679.jpg?w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                  Experience Extraordinary Living Spaces
                </h1>
                <p className="mb-5 text-sm md:text-base">
                  Immerse yourself in the epitome of luxury with our portfolio
                  of extraordinary living spaces. From sprawling mansions
                  nestled in picturesque landscapes to secluded private islands,
                  each property offers a unique opportunity to experience the
                  pinnacle of luxury living.
                </p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero md:h-[600px] h-[400px]"
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-photo/futuristic-representation-water-home-architecture_23-2151048182.jpg?w=996)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="md:px-20 px-10 text-white">
                <h1 className="mb-5 lg:text-5xl md:text-3xl text-2xl font-bold">
                  Unparalleled Luxury and Sophistication
                </h1>
                <p className="mb-5 text-sm md:text-base">
                  Indulge in opulence with our collection of meticulously
                  designed residences that redefine the meaning of luxury. With
                  unparalleled attention to detail and world-class amenities,
                  these estates offer a lifestyle of sophistication and
                  refinement.
                </p>
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
