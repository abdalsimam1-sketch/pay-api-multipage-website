import { EmailForm } from "../components/EmailForm";
import phone from "../assets/home/desktop/illustration-phone-mockup.svg";
import easy from "../assets/home/desktop/illustration-easy-to-implement.svg";
import simple from "../assets/home/desktop/illustration-simple-ui.svg";
import { Link } from "react-router-dom";
import { workItems } from "../data/HomeData";
import { Button } from "../components/Button";

import { features } from "../data/HomeData";
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
        <main className="container">
          <section className="easy-section d-flex flex-column flex-md-row">
            <div className="d-flex flex-column justify-content-center order-2 order-md-1">
              <h2 className="text-preset-2">Easy to implement</h2>
              <p className="text-muted text-preset-7-regular">
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
            <div className="order-1 order-md-2">
              <img src={easy} alt="" className="img-fluid" />
            </div>
          </section>
          <section className="simple-section d-flex flex-column flex-md-row">
            <div>
              <img src={simple} alt="" className="img-fluid" />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h2 className="text-preset-2"> Simple UI & UX</h2>
              <p className="text-muted text-preset-7-regular">
                Our pre-built form is easy to integrate in your app or website’s
                checkout flow and designed to optimize conversion.
              </p>
            </div>
          </section>

          <section className="feature-cards row g-4 text-center">
            {features.map((item, index) => (
              <div className="col-12 mx-auto col-md-4" key={index}>
                <div className="card p-3 h-100" style={{ background: "none" }}>
                  <img
                    src={item.image}
                    alt={item.title + "image"}
                    style={{ width: "7rem" }}
                    className="mx-auto"
                  />
                  <span className="text-preset-7-bold ">{item.title}</span>
                  <p className="text-muted text-preset-7-regular">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </section>

          <section className="d-flex justify-content-between align-items-center my-5">
            <div className="text-preset-2">Ready to start? </div>
            <div>
              <EmailForm></EmailForm>
            </div>
          </section>
        </main>
      </section>
    </main>
  );
};
