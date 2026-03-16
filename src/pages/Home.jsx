import { EmailForm } from "../components/EmailForm";
import phone from "../assets/home/desktop/illustration-phone-mockup.svg";
import { Link } from "react-router-dom";
import { workItems } from "../data/HomeData";
import { Button } from "../components/Button";
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

      <section className="work-section text-white p-5">
        <article className="container d-flex flex-column flex-md-row justify-content-md-center align-items-md-center gap-5 gap-md-0 ">
          <div className=" order-2 order-md-1 ">
            <h2 className="text-preset-3 text-white">Who we work with</h2>
            <p className="text-preset-7-regular text-white">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.
            </p>
            <div>
              <Button variant="2" children="About Us"></Button>
            </div>
          </div>

          <div className="row  g-5 order-1 order-md-2">
            {workItems.map((item, index) => (
              <div className="col-6 col-md-4" key={index}>
                <img src={item.image} alt="" className="white-logo" />
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="features-section p-5">
        <main className="container"></main>
      </section>
    </main>
  );
};
