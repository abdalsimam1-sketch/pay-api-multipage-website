import Logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className="container">
      <div>
        <img src={Logo} alt="logo" />
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </div>
      <div></div>
      <i className="bi bi-list d-md-none"></i>
    </nav>
  );
};
