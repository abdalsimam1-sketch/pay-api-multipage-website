import { EmailForm } from "../components/EmailForm";
import phone from "../assets/home/desktop/illustration-phone-mockup.svg";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <main className="text-center text-md-start">
      <section className="hero-section container d-flex flex-column flex-md-row align-items-center">
        <div className="d-flex flex-column justify-content-center order-2 order-md-1">
          <h1 className="text-preset-1">
            Start building with our APIs for absolutely free.
          </h1>
          <EmailForm></EmailForm>
          <div className="d-flex justify-content-center justify-content-md-start mt-3 gap-2">
            <p className="text-preset-7-regular">Have any questions? </p>
            <Link to="/contact" className="hero-link text-underline">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="d-flex justify-content-center order-1 order-md-2">
          <img
            src={phone}
            alt="illustration-phone image"
            className="img-fluid "
          />
        </div>
      </section>

      <section className="work-section"></section>
    </main>
  );
};
