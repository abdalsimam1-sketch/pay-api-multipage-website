import Logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { Button } from "./Button";
export const Navbar = () => {
  return (
    <nav className="container pt-5 d-flex  justify-content-between">
      <main className="d-flex align-items-center gap-5">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className=" nav-links gap-5 d-none d-md-flex">
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </main>
      <div className="d-none d-md-flex">
        <Button children="Schedule a Demo" variant="1"></Button>
      </div>
      <i className="btn bi bi-list d-md-none fs-1"></i>
    </nav>
  );
};
