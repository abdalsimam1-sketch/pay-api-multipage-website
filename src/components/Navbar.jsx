import Logo from "../assets/shared/desktop/logo.svg";
import { Link, useActionData } from "react-router-dom";
import { Button } from "./Button";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="d-flex">
      <nav className="container pt-5 d-flex  justify-content-between">
        <div className="d-flex align-items-center gap-5">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <div className=" nav-links gap-5 d-none d-md-flex">
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="d-none d-md-flex">
          <Button children="Schedule a Demo" variant="1"></Button>
        </div>

        <i className="btn bi bi-list d-md-none fs-1" onClick={toggleMenu}></i>
      </nav>
      {isOpen && (
        <div
          className="menu-box d-md-none position-fixed"
          style={{ right: "0", width: "20rem" }}
        >
          <div className="d-flex flex-column gap-5">
            <i
              className="bi bi-x fs-1 btn text-light position-fixed"
              onClick={toggleMenu}
              style={{ right: "0" }}
            ></i>
          </div>

          <div className=" nav-links d-flex flex-column align-items-center justify-content-center p-5 gap-3">
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>

            <Button children="Schedule a Demo" variant="1"></Button>
          </div>
        </div>
      )}
    </main>
  );
};
