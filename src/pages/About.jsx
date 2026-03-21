import groupDesktop from "../assets/about/desktop/image-team-members.jpg";
import groupMobile from "../assets/about/mobile/image-team-members.jpg";
import groupTablet from "../assets/about/tablet/image-team-members.jpg";
import { aboutStats } from "../data/AboutData.js";
import { ReadyToStart } from "../components/ReadyToStart.jsx";
import { AboutSection } from "../components/AboutSection.jsx";
export const About = () => {
  return (
    <main className=" text-center text-md-start d-flex flex-column gap-4">
      <section className="container ps-md-5 d-flex ">
        <h1 className="text-preset-2 my-5 ms-md-5 about-text">
          We empower innovators by delivering access to the financial system
        </h1>
      </section>

      <section>
        <AboutSection
          title="Our Vision"
          text="Our main goal is to build beautiful consumer experiences along with developer-friendly 
    infrastructure. The result is an intelligent tool that gives everyone the ability to create 
    amazing products that solve big problems. We are deeply focused on democratizing financial 
    services through technology."
        ></AboutSection>
      </section>

      <section>
        <AboutSection
          title="Our Business"
          text=" At the core of our platform is the technical infrastructure APIs that connect consumers. 
    Our innovative product provides key insights for businesses and individuals, as well as 
    robust reporting for traditional financial institutions and developers."
        ></AboutSection>
      </section>

      <section
        className="group-picture-section  d-md-flex justify-content-md-center "
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

      <section>
        <AboutSection
          title="The People"
          text=" We're all passionate about building a more efficient and inclusive financial infrastructure 
    together. At PayAPI, we have diverse backgrounds and skills."
        ></AboutSection>
      </section>

      <section>
        <AboutSection
          title="The Culture"
          text="We strongly believe there's always an opportunity to learn from each other outside of 
    day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
    We always value cross-team collaboration and diversity of thought, no matter the job title."
        ></AboutSection>
      </section>

      <section className="stat-section container ">
        <div className="row">
          <hr className="d-md-none" />
          {aboutStats.map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <hr className="d-none d-md-block" />
              <span className="text-preset-7-regular text-muted">
                {item.name}
              </span>
              <h3
                className="text-preset-3"
                style={{ color: "var( --rose-600)!important" }}
              >
                {item.number}
                {item.symbol}
              </h3>
              <hr className="d-none d-md-block" />
            </div>
          ))}
          <hr className="d-md-none" />
        </div>
      </section>

      <section className="container">
        <ReadyToStart></ReadyToStart>
      </section>
    </main>
  );
};
