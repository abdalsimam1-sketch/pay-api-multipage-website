import Logo from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start p-5">
      <main className="d-flex gap-md-5 align-items-center flex-column flex-md-row">
        <img src={Logo} alt="logo" />
        <div className="d-flex flex-column flex-md-row gap-md-5 footer-links">
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </main>
      <div className="footer-icons fs-3 d-flex gap-3">
        <i className="bi bi-facebook"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-linkedin"></i>
      </div>
    </footer>
  );
};
