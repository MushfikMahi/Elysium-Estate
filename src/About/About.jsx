const About = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896718.jpg?t=st=1712988136~exp=1712991736~hmac=6bebbe7727d8544369d39984e2778a9d3ae1aa5134c6cc6612bac228d78b0b1b&w=996)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="container mx-auto space-y-5 pt-40 mb-40 text-white">
        <h3 className="text-3xl font-bold text-center">About Us</h3>
        <p>
          Welcome to Elysium Estate, your premier destination for luxury real
          estate properties around the globe. With a passion for impeccable
          design, unparalleled comfort, and exceptional service, we are
          dedicated to providing our clients with the finest selection of luxury
          homes and exclusive estates.
        </p>
        <h3 className="text-3xl font-bold text-center">Our Mission</h3>
        <p>
          At Elysium Estate, our mission is to redefine luxury living by
          offering a curated collection of exquisite properties that embody the
          epitome of elegance, sophistication, and refinement. We strive to
          exceed our clients&apos; expectations by providing personalized
          service, expert guidance, and unmatched attention to detail throughout
          the buying and selling process.
        </p>
        <h3 className="text-3xl font-bold text-center">Why Choose Us</h3>
        <li>
          <span className="font-bold">Expertise: </span> Our team of experienced
          professionals brings a wealth of knowledge and expertise to every
          transaction, ensuring a seamless and stress-free experience for our
          clients.
        </li>
        <li>
          <span className="font-bold">Exclusivity: </span>
          We specialize in luxury real estate, offering a handpicked selection
          of properties in some of the most desirable locations worldwide. Each
          property in our portfolio is carefully curated to meet the highest
          standards of luxury living.
        </li>
        <li>
          <span className="font-bold">Exceptional Service: </span>
          At Elysium Estate, we prioritize the needs and preferences of our
          clients above all else. From initial consultation to closing, we are
          committed to providing exceptional service and personalized attention
          every step of the way.
        </li>
        <li>
          <span className="font-bold">Global Reach: </span>
          With a network of international partners and affiliates, we have the
          resources and connections to assist clients in finding their dream
          home anywhere in the world. Whether you&apos;re searching for a
          beachfront villa in the Caribbean or a penthouse in the heart of a
          bustling metropolis, we have you covered.
        </li>

        <h3 className="text-3xl font-bold text-center">Contact Us</h3>
        <p>
          Ready to embark on your journey to luxury living? Contact us today to
          learn more about our exclusive listings and personalized services.
          Your dream home awaits at Elysium Estate.
        </p>
      </div>
    </div>
  );
};

export default About;
