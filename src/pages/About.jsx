export const About = () => {
  return (
    <div className="container text-center text-md-start">
      <section className="">
        <h1 className="text-preset-2 col-md-6 my-5">
          We empower innovators by delivering access to the financial system
        </h1>
      </section>

      <section className="d-flex flex-column flex-md-row justify-content-between about-hero-section ">
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
      <section className="d-flex flex-column flex-md-row justify-content-between about-hero-section">
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
    </div>
  );
};
