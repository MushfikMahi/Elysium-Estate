import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <Link to={"/"} className="link link-hover">
          Home
        </Link>
        <Link to={"/about"} className="link link-hover">
          About
        </Link>
      </nav>
      <aside>
        <p>Copyright © 2024 - All right reserved by Elysium Estate Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
