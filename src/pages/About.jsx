import groupDesktop from "../assets/about/desktop/image-team-members.jpg";
import groupMobile from "../assets/about/mobile/image-team-members.jpg";
import groupTablet from "../assets/about/tablet/image-team-members.jpg";

export const About = () => {
  return (
    <main className=" text-center text-md-start">
      <section className="container">
        <h1 className="text-preset-2 col-md-6 my-5">
          We empower innovators by delivering access to the financial system
        </h1>
      </section>

      <section className=" container d-flex flex-column flex-md-row justify-content-between about-hero-section ">
        <div>
          <h3 className="text-preset-3  text-nowrap about-heading">
            Our Vision
          </h3>
        </div>
        <div>
          <p className="text-preset-7-regular text-muted about-text">
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>
      </section>
      <section className=" container d-flex flex-column flex-md-row justify-content-between about-hero-section">
        <div>
          <h3 className="text-preset-3 text-nowrap about-heading">
            Our Business
          </h3>
        </div>
        <div>
          <p className="text-preset-7-regular text-muted  about-text">
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>
      </section>

      <section
        className="group-picture-section  d-md-flex justify-content-md-center"
        style={{ overflow: "hidden" }}
      >
        <picture>
          <source media="(min-width:1024px)" srcSet={groupDesktop} />
          <source media="(min-width:768px)" srcSet={groupTablet} />
          <img
            src={groupMobile}
            alt="group picture"
            className="img-fluid rounded"
          />
        </picture>
      </section>
    </main>
  );
};
