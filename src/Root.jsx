import { Outlet } from "react-router-dom";
import NavBar from "./Shered/NavBar/Navbar";
import Footer from "./Shered/Footer/Footer";
const Root = () => {
  return (
    <div className="font-poppins">
      <NavBar> </NavBar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
